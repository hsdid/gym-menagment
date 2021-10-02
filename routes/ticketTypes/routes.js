const { ticketTypeAdd, pageTicketType, ticketTypeUpdates } = require('../../controller/ticketType/app');
const route = ({ router }) => {

    router.post('/add', ticketTypeAdd)
        .get('/', pageTicketType)
        .post('/edit', ticketTypeUpdates);

    return router;
}

module.exports = route;