module.exports = (source) => {
    return new Promise((resolve) => {
        TriggerEvent('procon:server:xPlayer', source, function (xPlayer) {
            resolve(xPlayer);
        });
    });
}