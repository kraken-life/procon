const addMoney = require('./addMoney');
const removeMoney = require('./removeMoney');

module.exports = (data) => {
    const {from, to, amount} = data;

    return removeMoney({name: from, amount})
        .then((success) => {
            return success
                ? addMoney({name: to, amount})
                : false;
        });
}

