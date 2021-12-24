const onecustomerSelect = ({ findCustomer }) => {
    return async function getOne(req, res, next) {

        const {customer, errors} = await findCustomer(req.params.id);
        
        if (errors) {
            msg = {
                error: errors
            }
            
            return res.send({msg: msg});
        }

        const ticket = await customer.getTicket();
        const discount = await customer.getDiscount();
        const ticketType = await ticket.getTicketType();

        let customerDataFormat = {
            id: customer.dataValues.id,
            firstName: customer.dataValues.firstName,
            lastName: customer.dataValues.lastName,
            number: customer.dataValues.number,
            discount: discount,
            status: customer.dataValues.status,
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

        return res.send({customer: customerDataFormat});
    }
}

module.exports = onecustomerSelect;