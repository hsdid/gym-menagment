const removeCustomer = ({ remove }) => {
    return async function removeOne(req, res, next) {
        
        const {customerId, msg, errors} = await remove(req.params.id);

        if (errors) {
            msg = {
                error: errors
            }
        
            return res.send({msg: msg});
        }

        return res.send({msg: msg, customerId: customerId});
    }
}

module.exports = removeCustomer;