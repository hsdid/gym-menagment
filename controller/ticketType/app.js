//use-case
const { findAllTicketTypes, addTicketTypes, updateTicketTypes } = require("../../use-cases/ticketType/app");

//controller
const addTicketType = require("./insert-ticketType");
const ticketTypePage = require("./pageController");
const ticketTypeUpdate = require("./update-ticketType");

//inject use-case 
const ticketTypeAdd = addTicketType({ addTicketTypes });
const pageTicketType = ticketTypePage({ findAllTicketTypes });
const ticketTypeUpdates = ticketTypeUpdate({ updateTicketTypes });

const services = Object.freeze({
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates
});

module.exports = services;
module.exports = {
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates
};