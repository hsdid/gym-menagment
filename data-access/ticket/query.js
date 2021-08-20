const query = ({ models }) => {
    return Object.freeze({
        insertNewTicket,
    });


    async function insertNewTicket({data}) {
        try {
            Ticket = models.Ticket; 
            const res = await Ticket.create(data);

            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    // async function findCustomerByNumber({ data }) {
    //     try {
    //         const Customer = models.Customer;

    //         const customer = Customer.findOne({where:{ number :data}});
    //         return customer;
    //     } catch (e) {
    //         console.log("Error: ", e);
    //     }
    // }

}

module.exports = query;