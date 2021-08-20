const customerAdd = ({ addCustomers, addTickets }) => {
    return async function post(req, res, next) {

        if (req.method === 'POST') {
            const data = req.body;

            const ticketType = data.ticketType;
            const code = data.code;
            
            let ticketData = {
                code: code,
                ticketTypeId: ticketType
            }

            delete data['ticketType'];
            delete data['code'];
            
            const customer = await addCustomers(data);
            
            ticketData['customerId'] = customer.dataValues.id;
            
            const ticket = await addTickets(ticketData);
            
            res.redirect('/');
        }
    }
}

module.exports = customerAdd;

