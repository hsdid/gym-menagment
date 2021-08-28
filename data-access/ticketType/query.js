const query = ({ models }) => {
    return Object.freeze({
        findAll,
        findOneById,
        insertNewTicketType
    });

    async function findAll() {
        try {
            const TicketType = models.TicketType;
            const res = await TicketType.findAll();
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function insertNewTicketType({ data }) {
        try {
            const TicketType = models.TicketType; 
            const res = await TicketType.create(data);

            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findOneById(id) {
        try {
            const TicketType = models.TicketType;
            const res = await TicketType.findOne({where:{
                id: id
            }});
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

}

module.exports = query;