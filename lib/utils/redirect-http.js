module.exports = function getRedirectHttp() {
    return function redirectHttp(req, res, next) {
        if(process.env.NODE_ENV !== 'production') return next();

        if(req.headers['x-forwarded-proto'] === 'http') next();
        else res.redirect(`https://${req.hostname}${req.url}`);
    };
};