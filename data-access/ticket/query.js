const query = ({ models }) => {
    return Object.freeze({
        insertNewTicket,
        findTicketByCode
    });


    async function insertNewTicket({ data }) {
        try {
            Ticket = models.Ticket; 
            const res = await Ticket.create(data);

            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findTicketByCode(data) {   
        try {
            Ticket = models.Ticket;
            const res = await Ticket.findOne({where:{
                code: data
            }});
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }
}

module.exports = query;