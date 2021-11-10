const findPaginationCustomer = ({ customerDb }) => {
    return async function getPagination({page, size, order}) {
        
        console.log('order =' + order);

        const pageAsNumber = Number.parseInt(page);
        const sizeAsNumber = Number.parseInt(size);
      
        let pageNr = 0;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
          pageNr = pageAsNumber;
        }
      
        if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 100) && !(sizeAsNumber < 1)){
          pageSize = sizeAsNumber;
        }

        let finalOrder = 'DESC';
        if (order !== undefined) {
            finalOrder = order;
        }

        const limit = pageSize;
        const offset = pageNr * pageSize;

        const customers = await customerDb.findPaginationCustomer({limit, offset, finalOrder});
        customers['pageSize'] = pageSize;
        return customers;
    };
};

module.exports = findPaginationCustomer;