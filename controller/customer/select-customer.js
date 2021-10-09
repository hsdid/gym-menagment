const onecustomerSelect = ({ findCustomer }) => {
    return async function getAll(req, res, next) {

        const {customer, errors} = await findCustomer(req.params.id);
        
        if (errors) {
            msg = {
                error: errors
            }
            
            return res.send({msg: msg});
        }

        const ticket = await customer.getTicket();
        const discount = await customer.getDiscount();


        let data = {
            id: customer.dataValues.id,
            firstName: customer.dataValues.firstName,
            lastName: customer.dataValues.lastName,
            number: customer.dataValues.number,
            discount: discount,
            ticket: ticket
                
        }

        return res.send({customer: data});
    }
}

module.exports = onecustomerSelect;