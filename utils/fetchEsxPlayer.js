module.exports = (source) => {
    return new Promise((resolve) => {
        TriggerEvent('ks_framework:server:xPlayer', source, function (xPlayer) {
            resolve(xPlayer);
        });
    });
}