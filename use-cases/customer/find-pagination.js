const findPaginationCustomer = ({ customerDb }) => {
    return async function getPagination({page, size, order}) {
        
        console.log('order =' + order);

        const pageAsNumber = Number.parseInt(page);
        const sizeAsNumber = Number.parseInt(size);
      
        let pageNr = 0;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
          pageNr = pageAsNumber;
        }
      
        let sizeNr = 100;
        if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
          sizeNr = sizeAsNumber;
        }

        let finalOrder = 'DESC';
        if (order !== undefined) {
            finalOrder = order;
        }

        const limit = sizeNr;
        const offset = pageNr * sizeNr;

        const customers = await customerDb.findPaginationCustomer({limit, offset, finalOrder});
        return customers;
    };
};

module.exports = findPaginationCustomer;