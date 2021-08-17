const models = require("../../models");
const query = require("./query");

const discountDb = query({models});

module.exports = discountDb;