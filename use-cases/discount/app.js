const discountDb = require("../../data-access/discount/app");

//use-case 
const findAllDiscount = require("./find-all");
const addDiscount = require("./insert-discount");
const findOneDiscount = require("./find-one");
//validation
const discountValidation = require("../../validation/discount");

const findAllDiscounts = findAllDiscount({ discountDb });
const addDiscounts = addDiscount({ discountDb, discountValidation });
const findDiscount = findOneDiscount({ discountDb });

const services = Object.freeze({
    findAllDiscounts,
    addDiscounts,
    findDiscount
});

module.exports = services;
module.exports = {
    findAllDiscounts,
    addDiscounts,
    findDiscount
};