const discountDb = require("../../data-access/discount/app");

//use-case 
const findAllDiscount = require("./find-all");
const addDiscount = require("./insert-discount");
//validation
const discountValidation = require("../../validation/discount");

const  findAllDiscounts = findAllDiscount({ discountDb });
const addDiscounts = addDiscount({ discountDb, discountValidation });

const services = Object.freeze({
    findAllDiscounts,
    addDiscounts
});

module.exports = services;
module.exports = {
    findAllDiscounts,
    addDiscounts
};