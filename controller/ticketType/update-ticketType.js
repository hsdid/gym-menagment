const ticketTypeUpdate = ({ updateTicketTypes }) => {
    return async function puts(req, res, next) {
        const data = req.body;
        
        const { ticketType, errors } = await updateTicketTypes(data);

        if (errors) {
            msg = {
                error: errors.details[0].message
            }
            return res.send({msg: msg});
        }

        msg = {
            success: 'Updated Succesfully'
        }

        return res.send({msg: msg, ticket: ticketType});
    }
}

module.exports = ticketTypeUpdate;
