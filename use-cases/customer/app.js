const customerDb = require("../../data-access/customer/app");
//use-cases
const addCustomer = require("./insert-customer");
const findAllCustomer = require("./find-all");
const customerValidation = require("../../validation/customer");

const addCustomers = addCustomer({ customerDb, customerValidation });
const findAllCustomers = findAllCustomer({ customerDb });

const services = Object.freeze({
    addCustomers,
    findAllCustomers
});

module.exports = services;
module.exports = {
    addCustomers,
    findAllCustomers
};
