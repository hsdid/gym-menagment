const addCustomer = ({ customerDb, customerValidation }) => {
    return async function post(data) {
        
        const {error} = customerValidation(data);
        
        if(error) {
            return {errors: error}
        }
        const customer = await customerDb.insertNewCustomer({data});
        return {customer};
    };
};

module.exports = addCustomer;