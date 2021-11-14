const customersUpdate = ({ updateCustomers, updateTickets, codeExists }) => {
    return async function puts(req, res, next) {
        const data = req.body;
        
         //check code is unique 
         const exist = await codeExists(data.code);
         if (exist) {
             msg = {
                 error: 'ticket with this code already exitst'
             }
            
             return res.send({msg: msg});
         }

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
            return res.send({msg: msg});
        }

        if (customer) {
           
            ticket = await customer.getTicket();
            
            ticket.dataValues.code = data.code;
            ticket.dataValues.dateTo = data.dataTo;
            ticket.dataValues.ticketTypeId = data.ticketType;
            const { updated, errors } = await updateTickets(ticket);

            if (errors) {
                msg = {
                    error: errors.details[0].message
                }
                return res.send({msg: msg});
            }
        }

        msg = {
            success: 'Updated Succesfully'
        }

        return res.send({msg: msg, customer:customer});
    }
}

module.exports = customersUpdate;