const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');
const getAccount = require("./getAccount");

module.exports = (data) => {
    const {source, account, amount} = data;

    return getAccount({source, account})
        .then((account) => {
            if (account.money >= amount) {
                return fetchEsxPlayer(source)
                    .then((xPlayer) => xPlayer.removeAccountMoney(account, amount));
            } else {
                return false;
            }
        });


}