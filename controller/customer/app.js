//use-case
const { addCustomers } = require("../../use-cases/customer/app");
const { addTickets } = require('../../use-cases/ticket/app');

//controller 
const customerAdd = require("./insert-customer");

//inject use-case
const customerAdds = customerAdd({ addCustomers, addTickets });

const services = Object.freeze({
    customerAdds
});

module.exports = services;
module.exports = {
    customerAdds
};