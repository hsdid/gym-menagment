const homeController = ({ findAllTicketTypes }) => {
    return async function getAll(req, res, next) {
        
        const ticketTypes = await findAllTicketTypes();
        
        res.render('pages/index', {types: ticketTypes});
    }
}

module.exports = homeController;