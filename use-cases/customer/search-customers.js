const searchCustomers = ({ customerDb }) => {
    return async function searchCustomer({ query, field }) {
        
        const customers = await customerDb.search({ query, field });
        return customers;
    };
};

module.exports = searchCustomers;