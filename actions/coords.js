module.exports = (data) => {
    const {source} = data;

    const ped = GetPlayerPed(source);
    const [x, y, z] = GetEntityCoords(ped);
    const h = GetEntityHeading(ped);

    return {x, y, z, h};
}