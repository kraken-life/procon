const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, item, count} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.canCarryItem(item, count));
}