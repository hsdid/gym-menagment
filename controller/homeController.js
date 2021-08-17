const { render } = require("pug");

module.exports = () => {
    'use strict';
    const homePage = async (req, res, next) => {
        res.render('pages/index');
    };

    return { homePage };
};