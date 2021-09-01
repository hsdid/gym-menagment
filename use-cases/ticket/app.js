const ticketDb = require("../../data-access/ticket/app");
const ticketTypeDb = require("../../data-access/ticketType/app");
const customerDb = require("../../data-access/customer/app");

const addTicket = require("./insert-ticket");
const codeExist = require('./code-exist');
const updateTicket = require("./update-ticket");

const ticketValidation = require("../../validation/ticket");

const addTickets = addTicket({ ticketDb, ticketTypeDb, customerDb });
const codeExists = codeExist({ ticketDb });
const updateTickets = updateTicket({ ticketDb, ticketValidation })

const services = Object.freeze({
    addTickets,
    codeExists,
    updateTickets
});

module.exports = services;
module.exports = {
    addTickets,
    codeExists,
    updateTickets
};