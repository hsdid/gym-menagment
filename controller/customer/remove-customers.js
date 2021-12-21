const removeCustomer = ({ remove }) => {
    return async function removeOne(req, res, next) {
        
        const {customerId, msg} = await remove(req.params.id);
        
        if (msg.error) {
            
            return res.send({msg: msg});
        }

        return res.send({msg: msg, customerId: customerId});
    }
}

module.exports = removeCustomer;