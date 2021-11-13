const models = require("../../models");
const query = require("./query");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const ticketTypeDb = query({ models, Op });

module.exports = ticketTypeDb;