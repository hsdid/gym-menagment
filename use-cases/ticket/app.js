const ticketDb = require("../../data-access/ticket/app");
const ticketTypeDb = require("../../data-access/ticketType/app");
const customerDb = require("../../data-access/customer/app");

const addTicket = require("./insert-ticket");
const codeExist = require('./code-exist');
//const customerValidation = require("../../validation/customer");

const addTickets = addTicket({ ticketDb, ticketTypeDb, customerDb });
const codeExists = codeExist({ ticketDb });

const services = Object.freeze({
    addTickets,
    codeExists
});

module.exports = services;
module.exports = {
    addTickets,
    codeExists
};