module.exports.pascalize = function pascalize(object) {
    const newObject = {};
    if (object) {
        for (const [key, value] of Object.entries(object)) {
            const newKey = key.replace(/^\w/, item => item.toUpperCase());

            if (typeof value === 'object') {
                newObject[newKey] = pascalize(value);
            } else {
                newObject[newKey] = value;
            }
        }
    }

    return newObject;
}