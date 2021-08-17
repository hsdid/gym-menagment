const findAllDiscount = ({ discountDb }) => {
    return async function getAll() {
    
        const discounts = await discountDb.findAll();
        console.log(discounts);
        return discounts;
    };
};

module.exports = findAllDiscount;