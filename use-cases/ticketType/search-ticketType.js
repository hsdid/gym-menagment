const searchTicketType = ({ ticketTypeDb }) => {
    return async function searchCustomer({ query, field }) {
        
        const ticketTypes = await ticketTypeDb.search({ query, field });
        return ticketTypes;
    };
};

module.exports = searchTicketType;