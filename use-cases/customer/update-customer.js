const updateCustomer = ({ customerDb, customerValidation }) => {
    return async function put(data) {
        //check if user exist 
        const {error} = customerValidation(data);

        if(error) {
            return {errors: error}
        }
        
        console.log('sss');

        await customerDb.patchCustomer({ data });
       
        const customer = await customerDb.findOneById(data.id);

        if (!customer) {
            error = 'cant find customer';
            return {errors: error}
        }

        return {customer};
    };
};
module.exports = updateCustomer;