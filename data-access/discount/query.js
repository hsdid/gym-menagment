const query = ({ models }) => {
    return Object.freeze({
        findAll
    });

    async function findAll() {
        try {
            const Discount = models.Discount;
            const res = await Discount.findAll();
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

}

module.exports = query;