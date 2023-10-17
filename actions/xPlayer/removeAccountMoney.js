const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, account, amount} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.removeAccountMoney(account, amount));
}