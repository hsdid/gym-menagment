const { customerAdds, customersUpdates, customersSelects, onecustomerSelects, customerSearch, customerRemove } = require('../../controller/customer/app');

const route = ({ router }) => {
    
    router.get('/', customersSelects);

    router.get('/search', customerSearch);

    router.get('/:id', onecustomerSelects);

    router.post('/add', customerAdds);

    router.put('/:id', customersUpdates);

    router.delete('/edit', customerRemove);

    return router;
};

module.exports = route;