const codeExist = ({ ticketDb }) => {
    return async function execute(data) {
        const code = await ticketDb.findTicketByCode(data);
        if (code) {
            return true;
        }
        return false;
    };
};

module.exports = codeExist;