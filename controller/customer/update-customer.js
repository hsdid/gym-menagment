const customersUpdate = ({ updateCustomers, updateTickets, codeExists }) => {
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
            return res.send({msg: msg});
        }

        if (customer) {
           
            ticket = await customer.getTicket();
            console.log(ticket.dataValues.dateTo);
            console.log(data.dateTo);

            //check code is unique 
            const exist = await codeExists(data.code);
            if (exist && data.code !== ticket.dataValues.code) {
                msg = {
                    error: 'ticket with this code already exitst'
                }
            
                return res.send({msg: msg});
            }
            ticket.dataValues.code = data.code;
            if (data.dateTo !== undefined) {
                ticket.dataValues.dateTo = data.dateTo;
            }
            console.log(ticket.dataValues.dateTo);
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

        const ticketType = await ticket.getTicketType();
        const discount = await customer.getDiscount();

        let customerDataFormat = {
            id: customer.dataValues.id,
            firstName: customer.dataValues.firstName,
            lastName: customer.dataValues.lastName,
            number: customer.dataValues.number,
            discount: discount,
            ticket: {
                id: ticket.dataValues.id,
                code: ticket.dataValues.code,
                finalPrice: ticket.dataValues.finalPrice,
                dateTo: ticket.dataValues.dateTo,
                createdAt: ticket.dataValues.createdAt,
                updatedAt: ticket.dataValues.updatedAt,
                customerId: ticket.dataValues.customerId,
                ticketTypeId: ticket.dataValues.ticketTypeId,
                name: ticketType.dataValues.name
            }
    };

        return res.send({msg: msg, customer: customerDataFormat});
    }
}

module.exports = customersUpdate;