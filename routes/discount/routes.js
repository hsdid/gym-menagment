const { discountAdds, discountSelects, discountSelect } = require('../../controller/discount/app');

const route = ({ router }) => {

    router.post('/add', discountAdds)
        .get('/', discountSelects)
        .get('/:id', discountSelect);

    return router;
}

module.exports = route;