const discountUpdate = ({ update }) => {
    return async function puts(req, res, next) {
        const data = req.body;
        
        const { discount, errors } = await update(data);

        if (errors) {
            msg = {
                error: errors.details[0].message
            }
            return res.send({msg: msg});
        }

        msg = {
            success: 'Updated Succesfully'
        }

        return res.send({msg: msg, discount: discount});
    }
}

module.exports = discountUpdate;
