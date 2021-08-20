const addCustomer = ({ customerDb, customerValidation }) => {
    return async function post(data) {
        
        const customer = await customerDb.insertNewCustomer({data});
        return customer;
    };
};

module.exports = addCustomer;