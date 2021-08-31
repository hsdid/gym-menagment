const updateCustomer = ({ customerDb, customerValidation }) => {
    return async function put(data) {
        //check if user exist 
        const {error} = customerValidation(data);

        if(error) {
            return {errors: error}
        }

        const customer = await customerDb.patchCustomer({ data });
        return {customer};
    };
};
module.exports = updateCustomer;