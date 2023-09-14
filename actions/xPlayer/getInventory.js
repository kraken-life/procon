const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.getInventory());
}