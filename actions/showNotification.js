module.exports = (data) => {
    const {source, message, beep, duration} = data;

    TriggerEvent('ks_framework:server:xPlayer', source, function (xPlayer) {
        xPlayer.showHelpNotification(message, false, beep || true, duration || 10000);
    });

    return true;
}