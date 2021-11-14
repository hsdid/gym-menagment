const ticketTypePage = ({ findAllTicketTypes }) => {
    return async function getAll(req, res, next) {

        const ticketType  = await findAllTicketTypes();

        

        return res.render('pages/ticketType', {ticketTypes: ticketType});
    }
}
module.exports = ticketTypePage;