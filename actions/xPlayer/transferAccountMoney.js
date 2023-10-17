const addAccountMoney = require('./addAccountMoney');
const removeAccountMoney = require('./removeAccountMoney');

module.exports = (data) => {
    const {from, to, account, amount} = data;

    return removeAccountMoney({source: from, account, amount})
        .then((success) => {
            return success
                ? addAccountMoney({source: to, account, amount})
                : false;
        });
}

