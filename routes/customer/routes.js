const { customerAdds, customersUpdates, customersSelects } = require('../../controller/customer/app');

const route = ({ router }) => {
    
    router.get('/', customersSelects);

    router.post('/add', customerAdds);

    router.patch('/:id', customersUpdates)

    return router;
};

module.exports = route;