const findAllTicketType = ({ ticketTypeDb }) => {
    return async function getAll() {
    
        const ticketTypes = await ticketTypeDb.findAll();
        return ticketTypes;
    };
};

module.exports = findAllTicketType;