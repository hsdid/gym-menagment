const isActive = ( date ) => {
        var now = new Date();

        if (date < now) {
            return false;
        }

        return true;
    };
module.exports = isActive;