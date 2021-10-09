//use-case
const { findAllTicketTypes, addTicketTypes, updateTicketTypes, findTicketType } = require("../../use-cases/ticketType/app");

//controller
const addTicketType = require("./insert-ticketType");
const ticketTypePage = require("./pageController");
const ticketTypeUpdate = require("./update-ticketType");
const ticketTypeSelect = require("./select-ticketTypes");
const oneTicketTypeSelect = require("./select-ticketType");

//inject use-case 
const ticketTypeAdd = addTicketType({ addTicketTypes });
const pageTicketType = ticketTypePage({ findAllTicketTypes });
const ticketTypeUpdates = ticketTypeUpdate({ updateTicketTypes });
const ticketTypeSelects = ticketTypeSelect({findAllTicketTypes});
const ticketTypeSelectOne = oneTicketTypeSelect({ findTicketType });


const services = Object.freeze({
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates,
    ticketTypeSelects,
    ticketTypeSelectOne
});

module.exports = services;
module.exports = {
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates,
    ticketTypeSelects,
    ticketTypeSelectOne
};