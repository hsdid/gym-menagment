//use-case
const { addCustomers } = require("../../use-cases/customer/app");

const customerAdd = require("./insert-customer");

const customerAdds = customerAdd({ addCustomers });

const services = Object.freeze({
    customerAdds
});

module.exports = services;
module.exports = {
    customerAdds
};