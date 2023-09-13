const config = require("../../config.json");

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7);

        if (token === config.token) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};