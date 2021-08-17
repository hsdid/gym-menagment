const customerAdd = ({ addCustomers }) => {
    return async function post(req, res, next) {

        if (req.method === 'POST') {
            const data = req.body;
            
            const {customer} = await addCustomers(data);
            
            if (customer) {
                console.log('udalo sie');
                res.redirect('/');
            }
            console.log('error');
            res.redirect('/');
        }
    }
}

module.exports = customerAdd;

