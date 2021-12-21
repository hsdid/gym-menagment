const removeDiscount = ({ discountDb }) => {
    return async function remove(id) {
       
        const discount = await discountDb.findOneById(id);
        
        if (!discount) {
            msg = { 
                error: 'Cant find discount'
            };
                
            return {msg: msg};
        }


        await discountDb.remove(id);

        msg = { 
            success: 'Discount deleted'
        };

        return {msg: msg, discountId: id};
    };
};
module.exports = removeDiscount;
