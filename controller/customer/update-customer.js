const customersUpdate = ({ updateCustomers }) => {
    return async function puts(req, res, next) {
        const data = req.body;
        const customerData = {
            id: data.customerId,
            firstName: data.firstName,
            lastName: data.lastName,
            number: data.number,
            discountId: data.discountId
        };

       const { customer, errors } = await updateCustomers(customerData);
       
        if (errors) {
            msg = {
                error: errors.details[0].message
            }
            req.session.msg = msg;
            return res.redirect('/');
        }
        

        msg = {
            success: 'Updated Succesfully'
        }
        
        req.session.msg = msg;

        return res.redirect('/');
    }
}

module.exports = customersUpdate;