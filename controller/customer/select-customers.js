const customerSelect = ({ findAllCustomers, dateFormat, customerActive, findPagination}) => {
    return async function getAll(req, res, next) {
   
        const defaultSize = 30;
        const defaultOrder = 'DESC';

        const { page, order, size }  = req.query;
       
        const data = await findPagination({ page, size, order, defaultSize, defaultOrder });

        return res.send({
            customers: data,
            totalPages: data['totalPages'],
            qty: data['qty'],
            nextPage: data['nextPageLink'],
            prevPage: data['prevPageLink'],
            currentPage: page
        });
    }
}

module.exports = customerSelect;