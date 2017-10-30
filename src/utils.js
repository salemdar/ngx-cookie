export function isBlank(obj) {
    return obj === undefined || obj === null;
}
export function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
export function isString(obj) {
    return typeof obj === 'string';
}
export function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    };
}
export function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
export function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}
