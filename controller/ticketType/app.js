//use-case
const { findAllTicketTypes, addTicketTypes } = require("../../use-cases/ticketType/app");

//controller
const addTicketType = require("./insert-ticketType");
const ticketTypePage = require("./pageController");

//inject use-case 
const ticketTypeAdd = addTicketType({ addTicketTypes });
const pageTicketType = ticketTypePage({ findAllTicketTypes });

const services = Object.freeze({
    ticketTypeAdd,
    pageTicketType
});

module.exports = services;
module.exports = {
    ticketTypeAdd,
    pageTicketType
};