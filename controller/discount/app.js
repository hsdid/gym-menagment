//use-case
const { addDiscounts, findAllDiscounts, findDiscount } = require("../../use-cases/discount/app");

//controller
const addDiscount = require("./insert-discount");
const discountPage = require("./pageController");
const discountsSelect = require("./select-discounts");
const oneDiscountSelect = require("./select-discount");
//inject use-case 
const discountAdds = addDiscount({ addDiscounts });
const pageDiscount = discountPage({ findAllDiscounts });
const discountSelects = discountsSelect({ findAllDiscounts });
const discountSelect = oneDiscountSelect({ findDiscount });

const services = Object.freeze({
    discountAdds,
    pageDiscount,
    discountSelects,
    discountSelect
});

module.exports = services;
module.exports = {
    discountAdds,
    pageDiscount,
    discountSelects,
    discountSelect
};