const fetchEsxPlayer = require("../../utils/fetchEsxPlayer");
module.exports = (data) => {
    const {source, message, beep, duration} = data;

    fetchEsxPlayer(source)
        .then((xPlayer) => xPlayer.showHelpNotification(message, false, beep || true, duration || 10000));

    return true;
}