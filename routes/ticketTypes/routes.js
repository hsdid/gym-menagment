const { ticketTypeAdd, ticketTypeSelects, ticketTypeUpdates, ticketTypeSelectOne } = require('../../controller/ticketType/app');
const route = ({ router }) => {

    router.post('/add', ticketTypeAdd)
        .get('/', ticketTypeSelects)
        .get('/:id', ticketTypeSelectOne)
        .patch('/edit', ticketTypeUpdates);
        
    return router;
}

module.exports = route;