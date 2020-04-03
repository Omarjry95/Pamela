var express = require('express');
var router = express.Router();
const { Category, Genre } = require('../models');
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
    DESCRIPTION: Get All Genres Grouped By Their Categories.

    RETURN Categories id, name, Genres id, name

    THROWS Error
*/
router.get('/getAll', verifyToken, function(req, res, next)
{
    Category.findAll({ attributes: ['id', 'name'], order: ['name'] })
        .then(categories =>
        {
            Genre.findAll({attributes: ['id', 'name', 'categoryId'], order: ['name']})
                .then(genres =>
                {
                    const data = [];

                    categories.forEach(category =>
                    {
                        const c = {
                            id: category.dataValues.id,
                            name: category.dataValues.name,
                            genres: []
                        };

                        genres.map(genre => genre.dataValues.categoryId === c.id ? c.genres.push({
                                id: genre.dataValues.id,
                                name: genre.dataValues.name,
                                category: genre.dataValues.categoryId
                            })
                            : null);

                        data.push(c);
                    });

                    prepareResponse(res, 200, data, 'application/json');
                })
                .catch(error =>
                {
                    const response = {
                        success: false,
                        message: "Some internal server error has occured while attempting to proceed " +
                            "with your request, please try again."
                    };

                    prepareResponse(res, 500, response, 'application/json');
                });
        })
        .catch(error =>
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        });
});

module.exports = router;