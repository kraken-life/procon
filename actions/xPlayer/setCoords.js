const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, x, y, z} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.setCoords({x, y, z}));
}