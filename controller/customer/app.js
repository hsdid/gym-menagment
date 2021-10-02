//use-case
const { addCustomers, updateCustomers, findAllCustomers } = require("../../use-cases/customer/app");
const { addTickets, codeExists } = require('../../use-cases/ticket/app');
const { updateTickets } = require("../../use-cases/ticket/app");
const dateFormat = require("../../helper/format-date");
const customerActive = require("../../helper/customer/is-active");
//validation 
const ticketValidation = require("../../validation/ticket");

//controller 
const customerAdd = require("./insert-customer");
const customersUpdate = require("./update-customer");
const customersSelect = require("./select-customers");

//inject use-case
const customerAdds = customerAdd({ addCustomers, addTickets, codeExists, ticketValidation });
const customersUpdates = customersUpdate({ updateCustomers, updateTickets }); 
const customersSelects = customersSelect({findAllCustomers, dateFormat, customerActive});

const services = Object.freeze({
    customerAdds,
    customersUpdates,
    customersSelects
});

module.exports = services;
module.exports = {
    customerAdds,
    customersUpdates,
    customersSelects
};