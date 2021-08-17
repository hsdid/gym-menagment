const { customerAdds } = require('../../controller/customer/app');

const route = ({ router }) => {

    router.post('/add', customerAdds);

    return router;
}

module.exports = route;