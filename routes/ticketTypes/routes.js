const { ticketTypeAdd, pageTicketType } = require('../../controller/ticketType/app');
const route = ({ router }) => {

    router.post('/add', ticketTypeAdd)
        .get('/', pageTicketType);

    return router;
}

module.exports = route;