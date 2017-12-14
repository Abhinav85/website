export default class Utils {
    static isBoolean(value) {
        return typeof value === 'boolean'
    }

    static isNumber(value) {
        return typeof value === 'number'
    }

    static isFunction(value) {
        return typeof value === 'function'
    }

    static isUndefined(value) {
        return typeof value === 'undefined'
    }

    static isNull(value) {
        return value === null
    }

    static isEmpty(value) {
        return value === ''
    }

    static isEmptyList(value) {
        return value.constructor === Array && value.length === 0
    }
    static isEmptyObject(value) {
        if (value === null) {
            return true
        }

        if (Utils.isBoolean(value) || Utils.isNumber(value) || Utils.isFunction(value)) {
            return false
        }

        if (value instanceof Set && !Utils.isUndefined(value.size) && value.size != 0) {
            return false
        }

        return Object.keys(value).length === 0
    }

    static isStringAndNotEmpty(value) {
        return (typeof value === 'string') && (value !== '');
    }

    static isString(value) {
        return (typeof value === 'string');
    }

    static isUndefinedOrNull(value) {
        return Utils.isUndefined(value) || Utils.isNull(value)
    }

    static isUndefinedOrNullOrEmpty(value) {
        return Utils.isUndefinedOrNull(value) || Utils.isEmpty(value)
    }

    static isUndefinedOrNullOrEmptyObject(value) {
        return Utils.isUndefinedOrNullOrEmpty(value) || Utils.isEmptyObject(value);
    }

    static isUndefinedOrNullOrEmptyList(value) {
        return Utils.isUndefinedOrNull(value) || Utils.isEmptyList(value)
    }

    static isUndefinedOrNullOrEmptyOrEmptyObjectOrEmptyList(value) {
        return Utils.isUndefinedOrNullOrEmpty(value) || Utils.isEmptyObject(value) || Utils.isUndefinedOrNullOrEmptyList(value)
    }

}