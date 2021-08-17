const addCustomer = ({ customerDb, customerValidation }) => {
    return async function post(data) {
        
        const {error} = customerValidation(data);
        console.log(error);
        if (error) {
            return error; 
        }
        const customer = await customerDb.insertNewCustomer({data});
        return customer;
    };
};

module.exports = addCustomer;