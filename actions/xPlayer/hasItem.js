const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, item} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.hasItem(item));
}