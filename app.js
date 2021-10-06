const express = require('express');
const app     = express();
const { sequelize } = require('./models');
const path = require('path');
var session = require('express-session');

//routes
const homeRoute = require('./routes/home/app');
const customerRoute = require('./routes/customer/app');
const discountRoute = require('./routes/discount/app');
const ticketTypeRoute = require('./routes/ticketTypes/app');

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret: "Shh, its a secret!"}));
app.set('views','./views');
app.set('view engine', 'pug');


app.use('/customer', customerRoute);
app.use('/discount', discountRoute);
app.use('/ticket', ticketTypeRoute);

app.listen({ port: 5000}, async () => {
    'use strict';
    console.log('server running');
    //await sequelize.sync({force: true});
    // await sequelize
    // .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
    // .then(function(results) {
    //     sequelize.sync({force: true});
    // });
    await sequelize.authenticate();
});

