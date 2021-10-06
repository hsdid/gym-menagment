const customerSelect = ({ findAllCustomers, dateFormat, customerActive}) => {
    return async function getAll(req, res, next) {
        const headers = {
            "Content-Type": "application/json",
          };

        const customers = await findAllCustomers();
        
        // foramt customer data 
        let formatCustomer = [];

        for (i = 0; i < customers.length; i++) {
            let customer = customers[i];
            const ticket = await customer.getTicket();
            const ticketType = await ticket.getTicketType();
            const discount = await customer.getDiscount();

            let d = ticket.dataValues.dateTo;
            
            let formatDate = dateFormat(d);
            let active = customerActive(d);

            let data = {
                
                customer: {
                    id: customer.dataValues.id,
                    firstName: customer.dataValues.firstName,
                    lastName: customer.dataValues.lastName,
                    number: customer.dataValues.number,
                    discount: discount,
                    ticket: ticket
                }
            };

            formatCustomer.push(data);
        }

        return res.send({customers: formatCustomer, msg: msg});
    }
}

module.exports = customerSelect;