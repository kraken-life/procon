const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('./middlewares/authenticate.js');
const config = require('./config.json');
const actions = require('./utils/actions');
const generateDotNotatedKeys = require('./utils/generateDotNotatedKeys');

const app = express();
const port = config.port;

app.use(bodyParser.json());
app.use(authenticate);

app.post('/run/:action', (req, res) => {
    const actionName = req.params.action;

    if (actionName) {
        const action = actionName.split('.').reduce((obj, key) => obj[key], actions);

        if (action) {
            Promise.resolve(() => action(req.body))
                .then((result) => {
                    res.json({result});
                });
            return;
        }
    }

    res.status(404).json({error: 'Invalid action'});
});

app.listen(port, () => {
    console.log(generateDotNotatedKeys(actions));
    console.log(`proCON is listening on port ${port}`);
});
