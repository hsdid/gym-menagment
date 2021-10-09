const findOneDiscount = ({ discountDb }) => {
    return async function getOne(id) {
       
        const discount = await discountDb.findOneById(id);
        
        if (!discount) {
            error = 'cant find customer';
            return {errors: error}
        }

        return {discount};
    };
};
module.exports = findOneDiscount