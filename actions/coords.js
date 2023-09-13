const {getPlayers} = require('@citizenfx/server');

module.exports = (data) => {
    const {source} = data;

    const players = getPlayers();
    const player = players.find((player) => player.toString() === source.toString());

    if (player) {
        const [x, y, z] = GetEntityCoords(player);
        const h = GetEntityHeading(player);

        return {x, y, z, h};
    } else {
        throw new Error('Player not found');
    }
}