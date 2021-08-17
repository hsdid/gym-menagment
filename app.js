const express = require('express');
const app     = express();
const { sequelize } = require('./models');
const path = require('path');

//routes
const homeRoute = require('./routes/home/app');
const customerRoute = require('./routes/customer/app');

app.use(express.json());
app.use(express.urlencoded());
app.set('views','./views');
app.set('view engine', 'pug');

app.use('/', homeRoute);
app.use('/customer', customerRoute);

app.listen({ port: 5000}, async () => {
    'use strict';
    console.log('server running');
    //await sequelize.sync({force: true});
    await sequelize.authenticate();
});

