const customersUpdate = ({ updateCustomers, updateTickets }) => {
    return async function puts(req, res, next) {
        const data = req.body;

        const customerData = {
            id: req.params.id,
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
            return res.send({msg: msg});
        }

        if (customer) {
           
            ticket = await customer.getTicket();
            
            ticket.dataValues.code = data.code;
            ticket.dataValues.dateTo = data.dataTo;
            ticket.dataValues.ticketTypeId = data.ticketType;
            const updated = await updateTickets(ticket);
        }

        msg = {
            success: 'Updated Succesfully'
        }
        
        req.session.msg = msg;

        return res.send({msg: msg, customer:customer});
    }
}

module.exports = customersUpdate;