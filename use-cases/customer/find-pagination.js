const e = require("cors");

const findPaginationCustomer = ({ customerDb, customerHelper }) => {
    return async function getPagination({ page, size, order, defaultSize, defaultOrder }) {
        
        const pageAsNumber = Number.parseInt(page);
        const sizeAsNumber = Number.parseInt(size);

        let pageNr = 0;
        let pageSize = 0;

        if(!Number.isNaN(pageAsNumber) && pageAsNumber > -1){
          pageNr = pageAsNumber;
          console.log('pageNr ' + pageNr);
        } else if (Number.isNaN(pageAsNumber)) {
          pageNr = null;
        }

        if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 100) && !(sizeAsNumber < 1)){
          pageSize = sizeAsNumber;
        } else if (Number.isNaN(sizeAsNumber)) {
          pageSize = null;
        } 
        if ( pageNr !== null && pageSize === null ) {
            pageSize = defaultSize;
        }
        const limit = pageSize;
        const offset = pageNr * pageSize;

        console.log('limit = ' + limit);
        console.log('offset = ' + offset);

        order = 'desc';

        const customers = await customerDb.findPaginationCustomer({limit, offset, order});
        
        let totalPages = Math.ceil(customers.count / Number.parseInt(pageSize));
        

        let nextPageLink = null;
        let prevPageLink = null;

        if ( pageNr !== null && pageSize !== null) {

          if ( pageNr == 0) {
            if (totalPages > 1) {
              nextPage = parseInt(pageNr) + 1;
              nextPageLink = '/customer/?page='+nextPage+'&size='+pageSize;
              prevPageLink = null;
            } else {
              nextPageLink = null;
              prevPageLink = null;
            }
          
          } else if (pageNr > 0) {
              if ( totalPages - 1 === pageNr) {
                prevPage = parseInt(pageNr) - 1;
                prevPageLink = '/customer/?page='+prevPage+'&size='+pageSize;
                nextPageLink = null;
              } else {
                nextPage = parseInt(pageNr) + 1;
                prevPage = parseInt(pageNr) - 1;
                nextPageLink = '/customer/?page='+nextPage+'&size='+pageSize;
                prevPageLink = '/customer/?page='+prevPage+'&size='+pageSize;
              } 
          } 
        }

        if ( pageNr !== null && pageSize === defaultSize ) {
          
            totalPages = Math.ceil(customers.count / Number.parseInt(pageSize));
            if ( pageNr == 0) {
              if (totalPages > 1) {
                nextPage = parseInt(pageNr) + 1;
                nextPageLink = '/customer/?page='+nextPage;
                prevPageLink = null;
              } else {
                nextPageLink = null;
                prevPageLink = null;
              }
              
  
            } else if (pageNr > 0) {
                if ( totalPages - 1 === pageNr) {
                  prevPage = parseInt(pageNr) - 1;
                  prevPageLink = '/customer/?page='+prevPage;
                  nextPageLink = null;
                } else {
                  nextPage = parseInt(pageNr) + 1;
                  prevPage = parseInt(pageNr) - 1;
                  nextPageLink = '/customer/?page='+nextPage;
                  prevPageLink = '/customer/?page='+prevPage;
                }
                
  
            } 
        } 

        totalPages = Math.ceil(customers.count / Number.parseInt(pageSize));

        formatCustomers = await customerHelper.formatData({ customers });
        formatCustomers['pageSize'] = pageSize;
        formatCustomers['qty'] = customers.rows.length;
        formatCustomers['totalPages'] = totalPages;
        formatCustomers['nextPageLink'] = nextPageLink;
        formatCustomers['prevPageLink'] = prevPageLink;

        return formatCustomers;


    };
};

module.exports = findPaginationCustomer;