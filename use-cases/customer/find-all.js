const findAllCustomer = ({ customerDb }) => {
    return async function getAll() {
    
        const customers = await customerDb.findAll();
        return customers;
    };
};

module.exports = findAllCustomer;