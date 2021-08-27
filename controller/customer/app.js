//use-case
const { addCustomers } = require("../../use-cases/customer/app");
const { addTickets, codeExists } = require('../../use-cases/ticket/app');
//validation 
const ticketValidation = require("../../validation/ticket");

//controller 
const customerAdd = require("./insert-customer");

//inject use-case
const customerAdds = customerAdd({ addCustomers, addTickets, codeExists, ticketValidation });

const services = Object.freeze({
    customerAdds
});

module.exports = services;
module.exports = {
    customerAdds
};