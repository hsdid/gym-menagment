const customerAdd = ({ addCustomers, addTickets, codeExists, ticketValidation }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;

            let ticketData = {
                code: data.code,
                ticketTypeId: data.ticketType
            }
           
            delete data['ticketType'];
            delete data['code'];
            //validate ticket simple data 
            const { error } = ticketValidation(ticketData);
            if (error) {
                msg = {
                    error: error.details[0].message
                }
               
                return res.send({msg: msg});
            }
            //check code is unique 
            const exist = await codeExists(ticketData.code);
            if (exist) {
                msg = {
                    error: 'ticket with this code already exitst'
                }
               
                return res.send({msg: msg});
            }
            //To do check discount with guiven id exist
            
            // check ticketType exist 

            const {customer, errors} = await addCustomers(data);

            if (errors || !data.discountId ) {
                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    }
                    
                    return res.send({msg: msg});
                }
                if (!data.discountId) {
                    msg = {
                        error: 'discount is not correct'
                    }
                   
                    return res.send({msg: msg});
                }
            }
            
            ticketData['customerId'] = customer.dataValues.id;
            
            const ticket = await addTickets(ticketData);
            msg = {
                success: 'Dodano prawidłowo'
            }

            const discount = await customer.getDiscount();
            const ticketType = await ticket.getTicketType();

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

            return res.send({customer: customerDataFormat, msg: msg});
        }
    }
}

module.exports = customerAdd;

