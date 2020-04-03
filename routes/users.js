var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const storeToken = require('./auth/storeToken');

/*
    PREPARE Response status, body and Content-Type Header
    SEND Response
*/
const prepareResponse = (response, status, body, type) =>
{
    response.set('Content-Type', type);
    response.status(status).send(body);
};

/*
    METHOD: POST
    DESCRIPTION: Sign In User with Username and Password.

    RETURN User id, username, token

    THROWS SeedNotFound, IncorrectCredentials
*/
router.post('/signin', function(req, res, next)
{
    const { username, password } = req.body;

    User.findOne({ where: {username: username} }).then(user =>
    {
        if (user)
        {
            bcrypt.compare(password, user.password).then(result =>
            {
                if (result)
                {
                    jwt.sign({id: user.username, createdAt: user.createdAt}, process.env.SECRET,
                        {expiresIn: parseInt(process.env.EXPIRATION)},

                        async function (error, token)
                        {
                            if (error)
                            {
                                const response = {
                                    success: false,
                                    message: "Some internal server error has occured while attempting to proceed " +
                                        "with your request, please try again."
                                };

                                prepareResponse(res, 500, response, 'application/json');
                            }

                            await storeToken(res, token);

                            const current = {
                                id: user.id,
                                username: user.username,
                                lastSignIn: user.lastSignIn,
                                profilePicture: user.profilePicture
                            };

                            const response = {
                                success: true,
                                message: "You have signed in successfully.",
                                user: current,
                            };

                            user.update({ lastSignIn: new Date()}, {})
                                .then(() =>
                                {
                                    prepareResponse(res, 200, response, 'application/json');
                                })
                                .catch(() =>
                                {
                                    const response = {
                                        success: false,
                                        message:
                                            "Some internal server error has occured while attempting to proceed "
                                            + "with your request, please try again."
                                    };

                                    prepareResponse(res, 500, response, 'application/json');
                                });
                        })
                }
                else
                {
                    const response = {
                        success: false,
                        message: "The password provided is incorrect, please try again with another password."
                    };

                    prepareResponse(res, 500, response, 'application/json');
                }
            });
        }
        else
        {
            const response = {
                success: false,
                message: "No User was found with the provided username, please try again with another username."
            };

            prepareResponse(res, 500, response, 'application/json');
        }
    })
});

module.exports = router;