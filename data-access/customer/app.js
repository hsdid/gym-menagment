const models = require("../../models");
const query = require("./query");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const customerDb = query({ models, Op });

module.exports = customerDb;