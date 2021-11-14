const discountPage = ({ findAllDiscounts }) => {
    return async function getAll(req, res, next) {

        const discounts   = await findAllDiscounts();

    

        return res.render('pages/discount', {discounts: discounts });
    }
}

module.exports = discountPage;