const searchCustomers = ({ searchCustomer }) => {
    return async function customerSearch(req, res, next) {

        const { q, f } = req.query;
        let query = q;
        let field = f
        if (field === undefined){
            field = 'lastName';
        }

        const customers = await searchCustomer({ query, field });
        

        let formatCustomer = [];

        for (i = 0; i < customers.rows.length; i++) {
            let customer = customers.rows[i];
            const ticket = await customer.getTicket();
            const ticketType = await ticket.getTicketType();
            const discount = await customer.getDiscount();

            let data = {
                    id: customer.dataValues.id,
                    firstName: customer.dataValues.firstName,
                    lastName: customer.dataValues.lastName,
                    number: customer.dataValues.number,
                    discount: discount,
                    ticket: ticket
            };

            formatCustomer.push(data);
        }
        
        return res.send({customers: formatCustomer, total: customers.count});
    }
}

module.exports = searchCustomers;