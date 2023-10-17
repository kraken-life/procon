const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, reason} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.kick(reason));
}