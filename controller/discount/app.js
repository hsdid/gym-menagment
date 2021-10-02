//use-case
const { addDiscounts, findAllDiscounts } = require("../../use-cases/discount/app");

//controller
const addDiscount = require("./insert-discount");
const discountPage = require("./pageController");
const discountSelect = require("./select-discount");

//inject use-case 
const discountAdds = addDiscount({ addDiscounts });
const pageDiscount = discountPage({ findAllDiscounts });
const discountSelects = discountSelect({findAllDiscounts});

const services = Object.freeze({
    discountAdds,
    pageDiscount,
    discountSelects
});

module.exports = services;
module.exports = {
    discountAdds,
    pageDiscount,
    discountSelects
};