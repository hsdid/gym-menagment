const query = ({ models }) => {
    return Object.freeze({
        insertNewCustomer,
        findCustomerByNumber,
        findOneById,
        findAll,
        patchCustomer,
        findPaginationCustomer
    });


    async function insertNewCustomer({data}) {
        try {
            const Customer = models.Customer;
            const res = await Customer.create(data);
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }
    
    async function patchCustomer({data}){
        try {
            const Customer = models.Customer;
            const res = await Customer.update(
               data,
               {
                where: {
                    id: data['id']
                }
            });
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }
    
    async function findOneById(id) {
        try {
            const Customer = models.Customer;
            const res = await Customer.findOne({where:{
                id: id
            }});
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findAll() {
        try {
            const Customer = models.Customer;
            const res = await Customer.findAll();
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findPaginationCustomer({limit, offset, finalOrder}) {
        try {
            const Customer = models.Customer;
            const res = await Customer.findAndCountAll({
                limit: limit,
                offset: offset,
                order: [
                    ['id', finalOrder]
                ]
            });

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

