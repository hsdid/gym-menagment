const updateDiscount = ({ discountDb, discountValidation }) => {
    return async function put(data) {

        // console.log(data.id);
        // if (data.id === undefined) {
        //     return {errors: 'discount id is required'};
        // }
        discount = await discountDb.findOneById(data.id);

        const {error} = discountValidation(discount.dataValues);
        
        if(error) {
            return {errors: error}
        }
        
        discount.dataValues.name = data.name;
        discount.dataValues.discount = data.discount;
        discount.dataValues.status = data.status;
        
        const res = await discountDb.patchDiscount(discount);
        return {res};
    };
};
module.exports = updateDiscount;