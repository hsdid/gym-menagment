const { customerAdds, customersUpdates } = require('../../controller/customer/app');

const route = ({ router }) => {

    router.post('/add', customerAdds)
            .post('/edit', customersUpdates);

    return router;
}

module.exports = route;