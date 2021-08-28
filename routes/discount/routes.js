const { discountAdds, pageDiscount } = require('../../controller/discount/app');

const route = ({ router }) => {

    router.post('/add', discountAdds)
        .get('/', pageDiscount);

    return router;
}

module.exports = route;