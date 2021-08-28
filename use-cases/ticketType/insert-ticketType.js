const addticketType = ({ ticketTypeDb, ticketTypeValidation }) => {
    return async function post(data) {
        
        const {error} = ticketTypeValidation(data);
        
        if(error) {
            return {errors: error}
        }
        const ticketType = await ticketTypeDb.insertNewTicketType({data});
        return {ticketType};
    };
};

module.exports = addticketType;