const addDiscount = ({ addDiscounts }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;
            
            const {discount, errors} = await addDiscounts(data);

                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    }
                    req.session.msg = msg;
                    return res.redirect('/discount');
                }
               
                msg = {
                    success: 'Discount saved'
                }
            req.session.msg = msg;

            return res.redirect('/discount');
        }
    }
}
module.exports = addDiscount;