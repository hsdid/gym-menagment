const homeController = ({ findAllTicketTypes, findAllDiscounts }) => {
    return async function getAll(req, res, next) {
        
        const discounts = await findAllDiscounts();
        const ticketTypes = await findAllTicketTypes();
        
        res.render('pages/index', {types: ticketTypes, discounts: discounts});
    }
}

module.exports = homeController;