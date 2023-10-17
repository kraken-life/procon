const fetchEsxPlayer = require('../../utils/fetchEsxPlayer');

module.exports = (data) => {
    const {source, name, grade} = data;

    return fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.setJob(name, grade));
}