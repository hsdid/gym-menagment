const models = require("../../models");
const query = require("./query");

const ticketTypeDb = query({models});

module.exports = ticketTypeDb;