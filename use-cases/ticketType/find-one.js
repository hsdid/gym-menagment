const findOneTicketType = ({ ticketTypeDb }) => {
    return async function getOne(id) {
       
        const ticket = await ticketTypeDb.findOneById(id);
        
        if (!ticket) {
            error = 'cant find ticket';
            return {errors: error}
        }

        return {ticket};
    };
};
module.exports = findOneTicketType