/**
 *
 * @param {Object} targetObject
 * @param {string} afterKey
 * @param {*} newKey
 * @param {*} newValue
 * @return {Object}
 */
const injectAfter = (targetObject, afterKey, newKey, newValue) => {
    if (!typeof targetObject === 'object' || targetObject === null) {
        return {
            newKey: newValue,
        };
    } else if (afterKey === newKey) {
        return targetObject;
    }
    // * javascript object is much different from php associative array
    // * and it's meaningless to order the keys of a object.
    // * so we can simply do
    return {...targetObject, [newKey]: newValue};

    // ! old way as a PHP version might be
    // const resultObject = {};
    // for (const key of Object.keys(targetObject)) {
    //     if (key !== newKey) resultObject[key] = targetObject[key];
    //     if (key === afterKey) {
    //         resultObject[newKey] = newValue;
    //     }
    // }
    // return resultObject;
};

exports.injectAfter = injectAfter;
