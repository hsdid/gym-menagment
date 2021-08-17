//use-case
const { findAllTicketTypes } = require("../../use-cases/ticketType/app");

const homeController = require("./homeController");

const homeControllers = homeController({ findAllTicketTypes });

const services = Object.freeze({
    homeControllers
});

module.exports = services;
module.exports = {
    homeControllers
};