const customerDb = require("../../data-access/customer/app");
//use-cases
const addCustomer = require("./insert-customer");
const findAllCustomer = require("./find-all");
const updateCustomer = require("./update-customer");
//validation
const customerValidation = require("../../validation/customer");

const addCustomers = addCustomer({ customerDb, customerValidation });
const updateCustomers = updateCustomer({ customerDb, customerValidation});
const findAllCustomers = findAllCustomer({ customerDb });

const services = Object.freeze({
    addCustomers,
    findAllCustomers,
    updateCustomers
});

module.exports = services;
module.exports = {
    addCustomers,
    findAllCustomers,
    updateCustomers
};
