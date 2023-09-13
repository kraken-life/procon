module.exports = (data) => {
    const {source} = data;

    TriggerEvent('ataCharCreator:RequestMenuCharSpecific', source);

    return true;
}