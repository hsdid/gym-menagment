const { ticketTypeAdd, ticketTypeSelects, ticketTypeUpdates, ticketTypeSelectOne, ticketTypeSearch } = require('../../controller/ticketType/app');
const route = ({ router }) => {

    router.post('/add', ticketTypeAdd)
        .get('/', ticketTypeSelects)
        .get('/search', ticketTypeSearch)
        .get('/:id', ticketTypeSelectOne)
        .put('/:id', ticketTypeUpdates);
        
    return router;
}

module.exports = route;