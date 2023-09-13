module.exports = (data) => {
    const {source, x, y} = data;

    TriggerClientEvent('rcon:client:groundlevel', source, x, y);

    return true;
}