const removeDiscount = ({ remove }) => {
    return async function removeOne(req, res, next) {
        
        const {discountId, msg} = await remove(req.params.id);
        
        if (msg.error) {
            
            return res.send({msg: msg});
        }

        return res.send({msg: msg, discountId: discountId});
    }
}

module.exports = removeDiscount;