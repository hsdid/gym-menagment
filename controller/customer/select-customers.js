const customerSelect = ({ findAllCustomers, dateFormat, customerActive, findPagination}) => {
    return async function getAll(req, res, next) {
        const headers = {
            "Content-Type": "application/json",
          };

        let size = req.query.size;
        const { page, order }  = req.query;
       

        const customers = await findPagination({page, size, order});
        
        // foramt customer data 
        let formatCustomer = [];

        for (i = 0; i < customers.rows.length; i++) {
            let customer = customers.rows[i];
            const ticket = await customer.getTicket();
            const ticketType = await ticket.getTicketType();
            const discount = await customer.getDiscount();

            let d = ticket.dataValues.dateTo;
            
            let formatDate = dateFormat(d);
            let active = customerActive(d);

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
        if (size === undefined) {
            size = 100;
        }

        return res.send({customers: formatCustomer, totalPages: Math.ceil(customers.count / Number.parseInt(size))});
    }
}

module.exports = customerSelect;