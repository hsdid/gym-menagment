const updateTicketType = ({ ticketTypeDb, ticketTypeValidation }) => {
    return async function put(data) {

        ticketType = await ticketTypeDb.findOneById(data.id);

        const {error} = ticketTypeValidation(ticketType.dataValues);
        
        if(error) {
            return {errors: error}
        }
        ticketType.dataValues.name = data.name;
        ticketType.dataValues.price = data.price;
        ticketType.dataValues.activeDays = data.activeDays;
        
        const res = await ticketTypeDb.patchTicketType(ticketType);
        return {res};
    };
};
module.exports = updateTicketType;