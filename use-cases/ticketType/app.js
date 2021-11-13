const ticketTypeDb = require("../../data-access/ticketType/app");
//use-case
const findAllTicketType = require("./find-all");
const addticketType = require("./insert-ticketType");
const updateTicketType = require("./update-ticketType");
const findOneTicketType = require("./find-one");
const searchTicketType = require("./search-ticketType");
//validation
const ticketTypeValidation = require("../../validation/ticketType");


const findAllTicketTypes = findAllTicketType({ ticketTypeDb });
const addTicketTypes = addticketType({ ticketTypeDb, ticketTypeValidation });
const updateTicketTypes = updateTicketType({ ticketTypeDb, ticketTypeValidation });
const findTicketType = findOneTicketType({ ticketTypeDb });
const searchTicketTypes = searchTicketType({ ticketTypeDb });

const services = Object.freeze({
    findAllTicketTypes,
    addTicketTypes,
    updateTicketTypes,
    findTicketType,
    searchTicketTypes
});

module.exports = services;
module.exports = {
    findAllTicketTypes,
    addTicketTypes,
    updateTicketTypes,
    findTicketType,
    searchTicketTypes
};