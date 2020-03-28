/*
    Store Token in a HTTPOnly Cookie
*/
const storeToken = (res, token) =>
{
    return res.cookie('user_jwt', token,
        {
            expires: new Date(Date.now() + process.env.EXPIRATION),
            secure: false,
            httpOnly: true,
    });
};
module.exports = storeToken;