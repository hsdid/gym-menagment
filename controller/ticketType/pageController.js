const ticketTypePage = ({ findAllTicketTypes }) => {
    return async function getAll(req, res, next) {

        const ticketType  = await findAllTicketTypes();

        msg = req.session.msg;

        return res.render('pages/ticketType', {ticketTypes: ticketType, msg: msg });
    }
}
module.exports = ticketTypePage;