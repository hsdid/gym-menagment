//use-case
const { addCustomers, updateCustomers } = require("../../use-cases/customer/app");
const { addTickets, codeExists } = require('../../use-cases/ticket/app');
//validation 
const ticketValidation = require("../../validation/ticket");

//controller 
const customerAdd = require("./insert-customer");
const customersUpdate = require("./update-customer");

//inject use-case
const customerAdds = customerAdd({ addCustomers, addTickets, codeExists, ticketValidation });
const customersUpdates = customersUpdate({ updateCustomers }); 

const services = Object.freeze({
    customerAdds,
    customersUpdates
});

module.exports = services;
module.exports = {
    customerAdds,
    customersUpdates
};