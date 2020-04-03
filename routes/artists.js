var express = require('express');
var router = express.Router();
var multer  = require('multer');
var md5 = require('md5');
var fs = require('fs');
const { Artist, Artists_Link, Artists_Genre } = require('../models');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/bmp': 'bmp'
};

var storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        fs.mkdir('./public/images/artists/' + md5(req.body.id), {recursive: true}, (error) =>
        {
            cb(null,  './public/images/artists/' + md5(req.body.id));
        });
    },
    filename: function (req, file, cb)
    {
        cb(null, md5(req.body.name) + "." + MIME_TYPES[file.mimetype]);
    }
});

var single = multer({ storage: storage }).single('image');

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
    DESCRIPTION: Add New Artist.

    RETURN Artists id, user, name, image

    THROWS Error
*/
router.post('/new', function(req, res, next)
{
    single(req, res, function (err)
    {
        if (err instanceof multer.MulterError)
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        }
        else if (err)
        {
            const response = {
                success: false,
                message: "Some internal server error has occured while attempting to proceed " +
                    "with your request, please try again."
            };

            prepareResponse(res, 500, response, 'application/json');
        }

        Artist.create({
            userId: parseInt(req.body.id),
            name: req.body.name,
            profilePicture: md5(req.body.name) + "." + MIME_TYPES[req.file.mimetype],
            createdAt: new Date(),
            updatedAt: new Date()
        })
            .then(artist =>
            {
                const links = JSON.parse(req.body.links);

                let externals = [];

                for (let i = 0; i < links.length; i++)
                {
                    const link = {
                        artistId: artist.id,
                        linkId: links[i].id ? links[i].id : null,
                        name: links[i].name ? links[i].name : null,
                        url: links[i].url,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    };

                    externals.push(link);
                }

                Artists_Link.bulkCreate(externals)
                    .then(() =>
                    {
                        const genres = JSON.parse(req.body.genres);

                        let artistGenres = [];

                        for (let j = 0; j < genres.length; j++)
                        {
                            const genre = {
                                artistId: artist.id,
                                genreId: genres[j],
                                createdAt: new Date(),
                                updatedAt: new Date()
                            };

                            artistGenres.push(genre);
                        }

                        Artists_Genre.bulkCreate(artistGenres)
                            .then(() =>
                            {
                                Artist.findAll({ attributes: ['id', 'name', 'profilePicture'],
                                    order: [['createdAt', 'DESC']] })
                                    .then(artists =>
                                    {
                                        prepareResponse(res, 200, artists, 'application/json');
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
});

/*
    METHOD: POST
    DESCRIPTION: Add New Artist But Without Image.

    RETURN Artists id, user, name, image

    THROWS Error
*/
router.post('/new/imageless', function(req, res, next)
{
    Artist.create({
        userId: req.body.id,
        name: req.body.name,
        profilePicture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(artist =>
        {
            const links = req.body.links;

            let externals = [];

            for (let i = 0; i < links.length; i++)
            {
                const link = {
                    artistId: artist.id,
                    linkId: links[i].id ? links[i].id : null,
                    name: links[i].name ? links[i].name : null,
                    url: links[i].url,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };

                externals.push(link);
            }

            Artists_Link.bulkCreate(externals)
                .then(() =>
                {
                    const genres = req.body.genres;

                    let artistGenres = [];

                    for (let j = 0; j < genres.length; j++)
                    {
                        const genre = {
                            artistId: artist.id,
                            genreId: genres[j],
                            createdAt: new Date(),
                            updatedAt: new Date()
                        };

                        artistGenres.push(genre);
                    }

                    Artists_Genre.bulkCreate(artistGenres)
                        .then(() =>
                        {
                            Artist.findAll({ attributes: ['id', 'name', 'profilePicture'],
                                order: [['createdAt', 'DESC']] })
                                .then(artists =>
                                {
                                    prepareResponse(res, 200, artists, 'application/json');
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