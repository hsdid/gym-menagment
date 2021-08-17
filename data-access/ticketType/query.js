const query = ({ models }) => {
    return Object.freeze({
        findAll
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

}

module.exports = query;