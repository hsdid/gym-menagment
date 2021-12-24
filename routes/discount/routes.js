const { discountAdds, discountSelects, discountSelect, discountRemove, discountUpdate } = require('../../controller/discount/app');

const route = ({ router }) => {

    router.post('/add', discountAdds)
        .get('/', discountSelects)
        .get('/:id', discountSelect)
        .delete('/:id', discountRemove)
        .put('/edit', discountUpdate)
    
}

module.exports = route;