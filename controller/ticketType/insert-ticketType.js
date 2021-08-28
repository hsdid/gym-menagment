const addTicketType = ({ addTicketTypes }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;
            
            const {ticketType, errors} = await addTicketTypes(data);

                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    };
                    req.session.msg = msg;
                    return res.redirect('/ticketTypes');
                }
               
                msg = {
                    success: 'Ticket saved'
                };
            req.session.msg = msg;

            return res.redirect('/ticketTypes');
        }
    }
}
module.exports = addTicketType;