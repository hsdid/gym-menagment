const customerDb = require("../../data-access/customer/app");
//use-cases
const addCustomer = require("./insert-customer");
const findAllCustomer = require("./find-all");
const updateCustomer = require("./update-customer");
const findOneCustomer = require("./find-one");
const findPaginationCustomer = require("./find-pagination");
const searchCustomers = require("./search-customers");

//validation
const customerValidation = require("../../validation/customer");

const addCustomers = addCustomer({ customerDb, customerValidation });
const updateCustomers = updateCustomer({ customerDb, customerValidation});
const findAllCustomers = findAllCustomer({ customerDb });
const findCustomer = findOneCustomer({ customerDb });
const findPagination = findPaginationCustomer({ customerDb });
const searchCustomer = searchCustomers({ customerDb });

const services = Object.freeze({
    addCustomers,
    findAllCustomers,
    updateCustomers,
    findCustomer,
    findPagination,
    searchCustomer
});

module.exports = services;
module.exports = {
    addCustomers,
    findAllCustomers,
    updateCustomers,
    findCustomer,
    findPagination,
    searchCustomer
};
