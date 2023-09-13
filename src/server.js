const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('./middlewares/authenticate');
const fs = require('fs');
const path = require('path');

const config = require('../config.json');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(authenticate);

const actions = {};
fs.readdirSync(path.join(__dirname, 'actions')).forEach((file) => {
    if (file.endsWith('.js')) {
        const actionName = file.replace('.js', '');
        actions[actionName] = require(`./actions/${file}`);
    }
});

app.post('/run', (req, res) => {
    const { action, data } = req.body;

    if (action && actions[action]) {
        const result = actions[action](data);

        res.json({ result });
    } else {
        res.status(404).json({ error: 'Invalid action' });
    }
});

app.listen(port, () => {
    console.log(`proCON is listening on port ${port}`);
});
