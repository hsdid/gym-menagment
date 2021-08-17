const findAllTicketType = ({ ticketTypeDb }) => {
    return async function getAll() {
    
        const ticketTypes = await ticketTypeDb.findAll();
        console.log(ticketTypes);
        return ticketTypes;
    };
};

module.exports = findAllTicketType;