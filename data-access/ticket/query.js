const query = ({ models }) => {
    return Object.freeze({
        insertNewTicket,
        findTicketByCode,
        patchTicket,
        remove,
        findOneById
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

    async function remove(id) {
        try {
            const ticket = await findOneById(id)
            const res = await ticket.destroy();
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    async function findOneById(id) {
        try {
            Ticket = models.Ticket;
            const res = await Ticket.findOne({where:{
                id: id
            }});
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

    async function patchTicket(data) {
        try {
            const Ticket = models.Ticket;
            const res = await Ticket.update(
                data.dataValues,
                {
                    where:{
                        id: data.dataValues.id
                    }
                });
            return res;
        } catch (e) {
            console.log("Error: ", e);
        }
    }
}

module.exports = query;