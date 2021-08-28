const ticketTypeDb = require("../../data-access/ticketType/app");
//use-case
const findAllTicketType = require("./find-all");
const addticketType = require("./insert-ticketType");
//validation
const ticketTypeValidation = require("../../validation/ticketType");


const findAllTicketTypes = findAllTicketType({ ticketTypeDb });
const addTicketTypes = addticketType({ ticketTypeDb, ticketTypeValidation });

const services = Object.freeze({
    findAllTicketTypes,
    addTicketTypes
});

module.exports = services;
module.exports = {
    findAllTicketTypes,
    addTicketTypes
};