const customerAdd = ({ addCustomers, addTickets }) => {
    return async function post(req, res, next) {
        //najperw powinnien tworzyc sie bilet i dobiero potem customer
        //pomysl zrobienie validatora wspolnego ktory sprawdzi dane 
        if (req.method === 'POST') {
            const data = req.body;
  
            let ticketData = {
                code: data.code,
                ticketTypeId: data.ticketType
            }
            //check code is unqie before user is created;
            
            delete data['ticketType'];
            delete data['code'];
            
            const {customer, errors} = await addCustomers(data);

            if (errors) {
                msg = {
                    error: errors.details[0].message
                }
                req.session.msg = msg;

                return res.redirect('/');
            }

            ticketData['customerId'] = customer.dataValues.id;
            
            const ticket = await addTickets(ticketData);
            
            msg = {
                success: 'Dodano prawidłowo'
            }
            req.session.msg = msg;
            return res.redirect('/');
        }
    }
}

module.exports = customerAdd;

