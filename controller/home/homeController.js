const homeController = ({ findAllTicketTypes, findAllDiscounts, findAllCustomers, customerActive, dateFormat }) => {
    return async function getAll(req, res, next) {

        const discounts = await findAllDiscounts();
        const ticketTypes = await findAllTicketTypes();
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
                id: customer.dataValues.id,
                firstName: customer.dataValues.firstName,
                lastName: customer.dataValues.lastName,
                discount: discount.dataValues.name,
                number: customer.dataValues.number,
                code: ticket.dataValues.code,
                ticket: ticketType.dataValues.name,
                dataTo: formatDate,
                active: active,
                discountId: customer.dataValues.discountId,
                ticketId: ticketType.dataValues.id
            };

            formatCustomer.push(data);
        }

     

        return res.send({types: ticketTypes, discounts: discounts, customers: formatCustomer});
    }
}

module.exports = homeController;