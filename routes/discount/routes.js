const { discountAdds, discountSelects } = require('../../controller/discount/app');

const route = ({ router }) => {

    router.post('/add', discountAdds)
        .get('/', discountSelects);

    return router;
}

module.exports = route;