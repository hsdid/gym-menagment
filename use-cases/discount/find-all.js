const findAllDiscount = ({ discountDb }) => {
    return async function getAll() {
    
        const discounts = await discountDb.findAll();
        return discounts;
    };
};

module.exports = findAllDiscount;