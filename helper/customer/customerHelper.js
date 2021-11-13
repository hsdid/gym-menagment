const helper = ( ) => {
    return Object.freeze({
        formatData
    });


    async function formatData({ customers }) {
        try {
             // foramt customer data 
            let formatCustomer = [];

            for (i = 0; i < customers.rows.length; i++) {
                let customer = customers.rows[i];
                const ticket = await customer.getTicket();
                const ticketType = await ticket.getTicketType();
                const discount = await customer.getDiscount();

                // let d = ticket.dataValues.dateTo;
                
                // let formatDate = dateFormat(d);
                // let active = customerActive(d);

                let data = {
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

                formatCustomer.push(data);                
            }
            return formatCustomer;
        } catch (e) {
            console.log("Error: ", e);
        }
    }
}

module.exports = helper;