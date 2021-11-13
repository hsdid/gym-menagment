const searchTicketType = ({ searchTicketTypes }) => {
    return async function ticketTypeSearch(req, res, next) {

        const { q, f } = req.query;
        let query = q;
        let field = f
        if (field === undefined){
            field = 'name';
        }

        const ticketTypes = await searchTicketTypes({ query, field });
        
        
        return res.send({tickets: ticketTypes, qty:  ticketTypes.count});
    }
}

module.exports = searchTicketType;