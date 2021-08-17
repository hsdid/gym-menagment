const ticketTypeDb = require("../../data-access/ticketType/app");

const findAllTicketType = require("./find-all");

const findAllTicketTypes = findAllTicketType({ ticketTypeDb });

const services = Object.freeze({
    findAllTicketTypes
});

module.exports = services;
module.exports = {
    findAllTicketTypes
};