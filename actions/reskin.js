module.exports = (data) => {
    const {source} = data;

    TriggerClientEvent('ataCharCreator:MenuChar', source);

    return true;
}