const ticketTypeSelect = ({ findAllTicketTypes }) => {
    return async function getAll(req, res, next) {

        const ticketType  = await findAllTicketTypes();

        return res.send({tickets: ticketType});
    }
}
module.exports = ticketTypeSelect;