const { ticketTypeAdd, ticketTypeSelects, ticketTypeUpdates } = require('../../controller/ticketType/app');
const route = ({ router }) => {

    router.post('/add', ticketTypeAdd)
        .get('/', ticketTypeSelects)
        .post('/edit', ticketTypeUpdates);

    return router;
}

module.exports = route;