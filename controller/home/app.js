//use-case
const { findAllTicketTypes } = require("../../use-cases/ticketType/app");
const { findAllDiscounts } = require("../../use-cases/discount/app");
const { findAllCustomers } = require("../../use-cases/customer/app");

const customerActive = require("../../helper/customer/is-active");

const homeController = require("./homeController");

const homeControllers = homeController({ findAllTicketTypes, findAllDiscounts, findAllCustomers, customerActive });

const services = Object.freeze({
    homeControllers
});

module.exports = services;
module.exports = {
    homeControllers
};