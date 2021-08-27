const customerAdd = ({ addCustomers, addTickets, codeExists, ticketValidation }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;
            
            let ticketData = {
                code: data.code,
                ticketTypeId: data.ticketType
            }
            delete data['ticketType'];
            delete data['code'];
            //validate ticket simple data 
            const { error } = ticketValidation(ticketData);
            if (error) {
                msg = {
                    error: error.details[0].message
                }
                req.session.msg = msg;
                return res.redirect('/');
            }
            //check code is unique 
            const exist = await codeExists(ticketData.code);
            if (exist) {
                msg = {
                    error: 'ticket with this code already exitst'
                }
                req.session.msg = msg;
                return res.redirect('/');
            }

            const {customer, errors} = await addCustomers(data);

            if (errors || !data.discountId ) {
                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    }
                    req.session.msg = msg;
                    return res.redirect('/');
                }
                if (!data.discountId) {
                    msg = {
                        error: 'discount is not correct'
                    }
                    req.session.msg = msg;
                    return res.redirect('/');
                }
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

