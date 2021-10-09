const discountSelect = ({ findAllDiscounts }) => {
    return async function getAll(req, res, next) {

        const discounts   = await findAllDiscounts();

        return res.send({discounts: discounts});
    }
}

module.exports =  discountSelect;