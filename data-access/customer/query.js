const query = ({ models }) => {
    return Object.freeze({
        insertNewCustomer,
        findCustomerByNumber
    });


    async function insertNewCustomer({data}) {
        try {
            console.log(data);
            const Customer = models.Customer;
                const res = await Customer.create(data);
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findCustomerByNumber({ data }) {
        try {
            const Customer = models.Customer;

            const customer = Customer.findOne({where:{ number :data}});
            return customer;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

}

module.exports = query;

