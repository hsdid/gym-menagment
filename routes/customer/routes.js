const { customerAdds, customersUpdates, customersSelects, onecustomerSelects, customerSearch } = require('../../controller/customer/app');

const route = ({ router }) => {
    
    router.get('/', customersSelects);

    router.get('/search', customerSearch);

    router.get('/:id', onecustomerSelects);

    router.post('/add', customerAdds);

    router.put('/:id', customersUpdates);

    return router;
};

module.exports = route;