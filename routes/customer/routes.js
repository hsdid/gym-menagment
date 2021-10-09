const { customerAdds, customersUpdates, customersSelects, onecustomerSelects } = require('../../controller/customer/app');

const route = ({ router }) => {
    
    router.get('/', customersSelects);

    router.get('/:id', onecustomerSelects);

    router.post('/add', customerAdds);

    router.put('/:id', customersUpdates);

    return router;
};

module.exports = route;