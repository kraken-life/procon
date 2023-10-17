const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, account} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.getAccount(account));
}