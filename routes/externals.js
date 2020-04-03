var express = require('express');
var router = express.Router();
const { External } = require('../models');
const verifyToken = require('./auth/verifyToken');

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
    METHOD: GET
    DESCRIPTION: Get All Externals.

    RETURN Externals id, name, color

    THROWS Error
*/
router.get('/getAll', verifyToken, function(req, res, next)
{
    External.findAll({ attributes: ['id', 'name', 'color'] })
        .then(externals =>
        {
            prepareResponse(res, 200, externals, 'application/json');
        })
        .catch(error =>
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        })
});

module.exports = router;