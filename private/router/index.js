let express = require('express');
let path = require('path');

// let API = require('./API');

module.exports = function (app) {
    // http://expressjs.com/en/guide/routing.html

    // ! Router get/post/.. path types:
    // '/about' - string text
    // '/products/(:category/)?:id' - string template (with named segments ":name" used in req.params as req.params.name)
    // /.*fish$/ - regular expression

    // ! Router respond examples for learn:
    // res.send() - send text (not sure)
    // res.render() - render the template
    // res.json() - respond as JSON
    // res.sendFile() - respond as File
    // res.redirect()
    // res.sendStatus()

    // static files
    // app.use('/favicon.ico', express.static(path.join(app.locals.rootPath, `../dist/favicon.ico`)));
    // app.use('/assets/img', express.static(path.join(app.locals.rootPath, `../public/img`))); // dist
    // app.use('/assets/css', express.static(path.join(app.locals.rootPath, `../public/css`))); // dist
    app.use('/', express.static(path.join(app.locals.rootPath, `../dist`)));
    app.use('/js', express.static(path.join(app.locals.rootPath, `../dist/js`)));
    // app.use(`/${app.locals.assets}`, express.static(path.join(app.locals.rootPath, `../dist/${app.locals.assets}`)));

    // pages
    // app.use('/api/', function (req, res, next) {
    //     req['isAjax'] = true;
    //     next();
    // }, API);
    // app.use('/admin/', adminRouter);
    // app.use('/articles/', articlesRouter);
};