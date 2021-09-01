const updateCustomer = ({ customerDb, customerValidation }) => {
    return async function put(data) {
        //check if user exist 
        const {error} = customerValidation(data);

        if(error) {
            return {errors: error}
        }

        await customerDb.patchCustomer({ data });
       
        const customer = await customerDb.findOneById(data.id);
        return {customer};
    };
};
module.exports = updateCustomer;