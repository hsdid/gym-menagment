

const addTicket = ({ ticketDb, ticketTypeDb, customerDb }) => {
    return async function post(data) {
        

        const ticketType = await ticketTypeDb.findOneById(data.ticketTypeId);
        const activeDays = ticketType.dataValues.activeDays;
        const price = ticketType.dataValues.price;

        const customer = await customerDb.findOneById(data.customerId);
        const discount = await customer.getDiscount();

        //count final ticket price 
        const finalPrice = price - (discount.dataValues.discount / 100) * price;
        //set dateTo
        let current = new Date();
        const dateTo = current.setDate(current.getDate() + activeDays);
        
        console.log(dateTo);

        data['finalPrice'] = finalPrice;
        data['dateTo'] = dateTo;    

        const ticket = await ticketDb.insertNewTicket({data});
        return ticket;
    };
};

module.exports = addTicket;