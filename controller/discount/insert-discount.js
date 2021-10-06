const addDiscount = ({ addDiscounts }) => {
    return async function post(req, res, next) { 
        if (req.method === 'POST') {
            const data = req.body;
            
            const {discount, errors} = await addDiscounts(data);

                if (errors) {
                    msg = {
                        error: errors.details[0].message
                    }
                    
                    return res.send({msg: msg});
                }
               
                msg = {
                    success: 'Discount saved'
                }

            return res.send({msg: msg, discount:discount});
        }
    }
}
module.exports = addDiscount;