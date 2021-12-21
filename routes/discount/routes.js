const { discountAdds, discountSelects, discountSelect, discountRemove } = require('../../controller/discount/app');

const route = ({ router }) => {

    router.post('/add', discountAdds)
        .get('/', discountSelects)
        .get('/:id', discountSelect)
        .delete('/:id', discountRemove);
    
}

module.exports = route;