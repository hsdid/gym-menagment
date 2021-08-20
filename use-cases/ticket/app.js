const ticketDb = require("../../data-access/ticket/app");
const ticketTypeDb = require("../../data-access/ticketType/app");
const customerDb = require("../../data-access/customer/app");

const addTicket = require("./insert-ticket");
//const customerValidation = require("../../validation/customer");

const addTickets = addTicket({ ticketDb, ticketTypeDb, customerDb });

const services = Object.freeze({
    addTickets
});

module.exports = services;
module.exports = {
    addTickets
};