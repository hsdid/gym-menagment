const oneTicketTypeSelect = ({ findTicketType }) => {
    return async function getAll(req, res, next) {

        const {ticket, errors} = await findTicketType(req.params.id);
        
        if (errors) {
            msg = {
                error: errors
            }
            
            return res.send({msg: msg});
        }

        return res.send({ticket: ticket});
    }
}

module.exports = oneTicketTypeSelect;