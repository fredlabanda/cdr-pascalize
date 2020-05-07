export default function pascalize(object:any) {
    const newObject:any = {};
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