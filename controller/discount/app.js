//use-case
const { addDiscounts, findAllDiscounts } = require("../../use-cases/discount/app");

//controller
const addDiscount = require("./insert-discount");
const discountPage = require("./pageController");

//inject use-case 
const discountAdds = addDiscount({ addDiscounts });
const pageDiscount = discountPage({ findAllDiscounts });

const services = Object.freeze({
    discountAdds,
    pageDiscount
});

module.exports = services;
module.exports = {
    discountAdds,
    pageDiscount
};