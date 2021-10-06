const addTicketType = ({ addTicketTypes }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;
            
            const {ticketType, errors} = await addTicketTypes(data);

                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    };
                    
                    return res.send({msg: msg});
                }
               
                msg = {
                    success: 'Ticket saved'
                };

            return res.send({msg: msg, ticket: ticketType});
        }
    }
}
module.exports = addTicketType;