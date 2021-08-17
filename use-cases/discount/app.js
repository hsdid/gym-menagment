const discountDb = require("../../data-access/discount/app");

const findAllDiscount = require("./find-all");

const  findAllDiscounts = findAllDiscount({ discountDb });

const services = Object.freeze({
    findAllDiscounts
});

module.exports = services;
module.exports = {
    findAllDiscounts
};