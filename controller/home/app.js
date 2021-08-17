//use-case
const { findAllTicketTypes } = require("../../use-cases/ticketType/app");
const { findAllDiscounts } = require("../../use-cases/discount/app");

const homeController = require("./homeController");

const homeControllers = homeController({ findAllTicketTypes, findAllDiscounts });

const services = Object.freeze({
    homeControllers
});

module.exports = services;
module.exports = {
    homeControllers
};