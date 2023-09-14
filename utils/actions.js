const glob = require('glob');
const path = require('path');

const actions = {};

const pattern = '**/*.js';
const resourcePath = GetResourcePath(GetCurrentResourceName());
const actionFiles = glob.sync(pattern, { cwd: path.join(resourcePath, 'actions') });

actionFiles.forEach((file) => {
    const actionPath = path.join(resourcePath, 'actions', file);
    const actionName = path.basename(file, '.js');
    const actionParts = file.split('/');

    let currentObj = actions;
    for (let i = 0; i < actionParts.length - 1; i++) {
        const subdirectory = actionParts[i];
        currentObj[subdirectory] = currentObj[subdirectory] || {};
        currentObj = currentObj[subdirectory];
    }

    currentObj[actionName] = require(actionPath);
});

module.exports = actions;
