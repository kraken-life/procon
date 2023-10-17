const getAccount = require('./getAccount');
const addAccountMoney = require('./addAccountMoney');
const removeAccountMoney = require('./removeAccountMoney');

module.exports = (data) => {
    const {from, to, account, amount} = data;

    return getAccount({source: from, account})
        .then((account) => {
            if (account.money >= amount) {
                return removeAccountMoney({source: from, account, amount})
                    .then(() => {
                        return addAccountMoney({source: to, account, amount})
                            .then(() => true);
                    });
            } else {
                return false;
            }
        });
}

