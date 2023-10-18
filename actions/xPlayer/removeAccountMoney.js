const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');
const getAccount = require("./getAccount");

module.exports = (data) => {
    const {source, account, amount} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.removeAccountMoney(account, amount));
}