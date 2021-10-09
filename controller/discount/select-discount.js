const oneDiscountSelect = ({ findDiscount }) => {
    return async function getAll(req, res, next) {

        const {discount, errors} = await findDiscount(req.params.id);
        
        if (errors) {
            msg = {
                error: errors
            }
            
            return res.send({msg: msg});
        }

        return res.send({discount: discount});
    }
}

module.exports = oneDiscountSelect;