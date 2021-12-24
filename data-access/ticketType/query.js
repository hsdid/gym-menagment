const query = ({ models, Op }) => {
    return Object.freeze({
        findAll,
        findOneById,
        insertNewTicketType,
        patchTicketType,
        search
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

    async function patchTicketType(data) {
        try {
            const TicketType = models.TicketType;
            const res = await TicketType.update(
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

    async function search({query, field}) {
        try {
            const TicketType = models.TicketType;
            const res = await TicketType.findAndCountAll({
                where: {
                    [field]: {
                       [Op.like]: `%${query}%`
                    }
                }
            });
            return res;

        } catch (e) {
            console.log("Error: ", e);
        }

    }
}

module.exports = query;