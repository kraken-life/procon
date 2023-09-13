module.exports = (data) => {
    const {source} = data;

    return new Promise((resolve) => {
        TriggerEvent('ks_framework:server:xPlayer', source, function (xPlayer) {
            resolve(xPlayer.getInventory());
        });
    });
}