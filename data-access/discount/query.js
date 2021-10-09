const query = ({ models }) => {
    return Object.freeze({
        findAll,
        insertNewDiscount,
        findOneById
    });

    async function findAll() {
        try {
            const Discount = models.Discount;
            const res = await Discount.findAll();
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    };

    async function insertNewDiscount({ data }) {
        try {
            const Discount = models.Discount; 
            const res = await Discount.create(data);

            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    };

    async function findOneById(id) {
        try {
            const Discount = models.Discount;
            const res = await Discount.findOne({where:{
                id: id
            }});
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

}

module.exports = query;