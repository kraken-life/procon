module.exports = (data) => {
    const {source} = data;

    TriggerClientEvent('esx_ambulancejob:revive', source);

    return true;
}