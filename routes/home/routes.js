//const homeController = require('../../controller/homeController');
const { homeControllers } = require('../../controller/home/app');

const route = ({ router }) => {

    router.get('/', homeControllers);

    return router;
}

module.exports = route;