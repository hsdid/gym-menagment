const updateTicket = ({ ticketDb, ticketValidation }) => {
    return async function put(data) {
        console.log('updated ticket' , data);
        const {error} = ticketValidation(data.dataValues);
        
        if(error) {
            return {errors: error}
        }
        
        const ticket = await ticketDb.patchTicket(data);
        return {ticket};
    };
};
module.exports = updateTicket;