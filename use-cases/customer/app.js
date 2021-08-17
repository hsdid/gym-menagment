const customerDb = require("../../data-access/customer/app");

const addCustomer = require("./insert-customer");
const customerValidation = require("../../validation/customer");

const addCustomers = addCustomer({ customerDb, customerValidation });

const services = Object.freeze({
    addCustomers
});

module.exports = services;
module.exports = {
    addCustomers
};
