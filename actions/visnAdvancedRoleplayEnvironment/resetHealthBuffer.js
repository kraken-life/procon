module.exports = (data) => {
    const {source} = data;

    TriggerClientEvent('visn_are:resetHealthBuffer', source);

    return true;
}