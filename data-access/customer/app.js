const models = require("../../models");
const query = require("./query");

const customerDb = query({models});

module.exports = customerDb;