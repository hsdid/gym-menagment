const express = require('express');
const app     = express();
const { sequelize } = require('./models');
const path = require('path');
var cors = require('cors');

//routes
const homeRoute = require('./routes/home/app');
const customerRoute = require('./routes/customer/app');
const discountRoute = require('./routes/discount/app');
const ticketTypeRoute = require('./routes/ticketTypes/app');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

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

