//use-case
const { findAllTicketTypes, addTicketTypes, updateTicketTypes, findTicketType, searchTicketTypes } = require("../../use-cases/ticketType/app");

//controller
const addTicketType = require("./insert-ticketType");
const ticketTypePage = require("./pageController");
const ticketTypeUpdate = require("./update-ticketType");
const ticketTypeSelect = require("./select-ticketTypes");
const oneTicketTypeSelect = require("./select-ticketType");
const searchTicketType = require("./search-ticketType");

//inject use-case 
const ticketTypeAdd = addTicketType({ addTicketTypes });
const pageTicketType = ticketTypePage({ findAllTicketTypes });
const ticketTypeUpdates = ticketTypeUpdate({ updateTicketTypes });
const ticketTypeSelects = ticketTypeSelect({findAllTicketTypes});
const ticketTypeSelectOne = oneTicketTypeSelect({ findTicketType });
const ticketTypeSearch = searchTicketType({ searchTicketTypes })


const services = Object.freeze({
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates,
    ticketTypeSelects,
    ticketTypeSelectOne,
    ticketTypeSearch
});

module.exports = services;
module.exports = {
    ticketTypeAdd,
    pageTicketType,
    ticketTypeUpdates,
    ticketTypeSelects,
    ticketTypeSelectOne,
    ticketTypeSearch
};