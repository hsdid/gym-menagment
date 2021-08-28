const discountPage = ({ findAllDiscounts }) => {
    return async function getAll(req, res, next) {

        const discounts   = await findAllDiscounts();

        msg = req.session.msg;

        return res.render('pages/discount', {discounts: discounts, msg: msg });
    }
}

module.exports = discountPage;