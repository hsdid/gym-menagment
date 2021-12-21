//use-case
const { addDiscounts, findAllDiscounts, findDiscount, remove } = require("../../use-cases/discount/app");

//controller
const addDiscount = require("./insert-discount");
const discountPage = require("./pageController");
const discountsSelect = require("./select-discounts");
const oneDiscountSelect = require("./select-discount");
const removeDiscount = require("./remove-discount");
//inject use-case 
const discountAdds = addDiscount({ addDiscounts });
const pageDiscount = discountPage({ findAllDiscounts });
const discountSelects = discountsSelect({ findAllDiscounts });
const discountSelect = oneDiscountSelect({ findDiscount });
const discountRemove = removeDiscount({ remove });

const services = Object.freeze({
    discountAdds,
    pageDiscount,
    discountSelects,
    discountSelect,
    discountRemove
});

module.exports = services;
module.exports = {
    discountAdds,
    pageDiscount,
    discountSelects,
    discountSelect,
    discountRemove
};