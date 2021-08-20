const models = require("../../models");
const query = require("./query");

const ticketDb = query({models});

module.exports = ticketDb;