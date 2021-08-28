const addDiscount = ({ discountDb, discountValidation }) => {
    return async function post(data) {
    
        const {error} = discountValidation(data);
        
        if(error) {
            return {errors: error}
        }
        const discount = await discountDb.insertNewDiscount({data});
        return {discount};
    };
};

module.exports = addDiscount;