const customerSelect = ({ findAllCustomers, dateFormat, customerActive, findPagination}) => {
    return async function getAll(req, res, next) {
   
        let size = 10;
        if (req.query.size !== undefined) {
            size = req.query.size;
        }

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

        totalPages = Math.ceil(customers.count / Number.parseInt(customers.pageSize));


        
        if ( totalPages-1 == page ) {
            nextPageLink = null;
            prevPage = parseInt(page) - 1;
            prevPageLink = '/customer/?page='+prevPage+'&size='+size;

        } else if ( page == 0) {
            nextPage = parseInt(page) + 1;
            nextPageLink = '/customer/?page='+nextPage+'&size='+size;
            prevPageLink = null;

        } else {
            nextPage = parseInt(page) + 1;
            prevPage = parseInt(page) - 1;
            nextPageLink = '/customer/?page='+nextPage+'&size='+size;
            prevPageLink = '/customer/?page='+prevPage+'&size='+size;
        }


        return res.send({customers: formatCustomer, totalPages: Math.ceil(customers.count / Number.parseInt(customers.pageSize)), nextPage: nextPageLink, prevPage: prevPageLink});
    }
}

module.exports = customerSelect;