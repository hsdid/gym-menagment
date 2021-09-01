const updateTicket = ({ ticketDb, ticketValidation }) => {
    return async function put(data) {

        const {error} = ticketValidation(data.dataValues);
        
        if(error) {
            console.log('aaaa ' + error);
            return {errors: error}
        }
        
        const ticket = await ticketDb.patchTicket(data);
        return {ticket};
    };
};
module.exports = updateTicket;