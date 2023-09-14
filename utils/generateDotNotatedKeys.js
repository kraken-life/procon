function generateDotNotatedKeys(obj, parentKey = '') {
    let keys = [];

    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const nestedKeys = generateDotNotatedKeys(obj[key], parentKey + key + '.');
            keys = keys.concat(nestedKeys);
        } else {
            keys.push(parentKey + key);
        }
    }

    return keys.sort();
}

module.exports = generateDotNotatedKeys;