const ticketTypeUpdate = ({ updateTicketTypes }) => {
    return async function puts(req, res, next) {
        const data = req.body;
        
        const { ticketType, errors } = await updateTicketTypes(data);

        if (errors) {
            msg = {
                error: errors.details[0].message
            }
            req.session.msg = msg;
            return res.redirect('/ticketTypes');
        }

        msg = {
            success: 'Updated Succesfully'
        }
        
        req.session.msg = msg;

        return res.redirect('/ticketTypes');
    }
}

module.exports = ticketTypeUpdate;
