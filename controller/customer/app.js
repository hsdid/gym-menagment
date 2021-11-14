//use-case
const { addCustomers, updateCustomers, findAllCustomers, findCustomer, findPagination, searchCustomer } = require("../../use-cases/customer/app");
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
const onecustomerSelect = require("./select-customer");
const searchCustomers = require("./search-customers");

//inject use-case
const customerAdds = customerAdd({ addCustomers, addTickets, codeExists, ticketValidation });
const customersUpdates = customersUpdate({ updateCustomers, updateTickets, codeExists }); 
const customersSelects = customersSelect({findAllCustomers, dateFormat, customerActive, findPagination});
const onecustomerSelects = onecustomerSelect({ findCustomer });
const customerSearch = searchCustomers({ searchCustomer })

const services = Object.freeze({
    customerAdds,
    customersUpdates,
    customersSelects,
    onecustomerSelects,
    customerSearch
});

module.exports = services;
module.exports = {
    customerAdds,
    customersUpdates,
    customersSelects,
    onecustomerSelects,
    customerSearch
};