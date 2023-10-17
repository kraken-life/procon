const fetchEsxPlayer = require("../../utils/fetchEsxPlayer");
module.exports = (data) => {
    const {source, message} = data;

    fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.showNotification(message));

    return true;
}