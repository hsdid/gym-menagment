const homeController = ({ findAllTicketTypes, findAllDiscounts, findAllCustomers, customerActive }) => {
    return async function getAll(req, res, next) {

        const discounts   = await findAllDiscounts();
        const ticketTypes = await findAllTicketTypes();
        const customers   = await  findAllCustomers();
        
        // foramt customer data 
        let formatCustomer = [];

        for (i = 0; i < customers.length; i++) {
            let customer = customers[i];
            const ticket = await customer.getTicket();

            let d = ticket.dataValues.dateTo
            let day = d.getDate();
            let month = d.getMonth() + 1;
            let year = d.getFullYear();
            let formatDateTo = day + '-' + month + '-' + year;
            let active = customerActive(d);

            let data = {
                firstName: customer.dataValues.firstName,
                lastName:  customer.dataValues.lastName,
                number:    customer.dataValues.number,
                code:      ticket.dataValues.code,
                dataTo:    formatDateTo,
                active:    active
            };
            
            formatCustomer.push(data);
        }

        msg = req.session.msg;

        return res.render('pages/index', {types: ticketTypes, discounts: discounts, customers: formatCustomer, msg: msg });
    }
}

module.exports = homeController;