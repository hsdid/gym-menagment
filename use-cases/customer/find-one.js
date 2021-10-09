const findOneCustomer = ({ customerDb }) => {
    return async function getOne(id) {
       
        const customer = await customerDb.findOneById(id);
        
        if (!customer) {
            error = 'cant find customer';
            return {errors: error}
        }

        return {customer};
    };
};
module.exports = findOneCustomer