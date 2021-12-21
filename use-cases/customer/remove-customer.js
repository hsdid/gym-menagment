const removeCustomer = ({ customerDb }) => {
    return async function remove(id) {
       
        const customer = await customerDb.findOneById(id);
        
        if (!customer) {
            msg = { 
                error: 'Cant find customer'
            }
                
            return {msg: msg}
        }


        await customerDb.remove(id);

        msg = { 
            success: 'Customer deleted'
        }

        return {msg: msg, customerId: id};
    };
};
module.exports = removeCustomer