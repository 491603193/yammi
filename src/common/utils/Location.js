var session = window.sessionStorage;
var local = window.localStorage;
const setSessionStorage = function (key, value) {
    if (!key || !value) console.warn('key or value is empty');
    if (typeof value === 'object') {
        value = 'obj-' + JSON.stringify(value);
    } else {
        value = 'str-' + value;
    }
    if (session) session.setItem(key, value);
};
const getSessionStorage = function (key) {
    if (!key)  console.warn('key is empty');
    if (session) {
        var v = session.getItem(key);
        if (!v)   return;
        if (v.indexOf('obj-') === 0) {
            v = v.slice(4);
            return JSON.parse(v);
        } else if (v.indexOf('str-') === 0) {
            return v.slice(4);
        }
    }
};
const removeSessionStorage = function (key) {
    if (!key)  console.warn('key is empty');
    if (session) session.removeItem(key);
};
const clearSessionStorage = function () {
    if (session) session.clear();
};
const setLocalStorage = function (key, value) {
    if (!key || !value)  console.warn('key or value is empty');
    if (typeof value === 'object') {
        value = 'obj-' + JSON.stringify(value);
    } else if (typeof value === 'boolean') {
        value = 'boo-' + value;
    } else if (typeof value === 'number') {
        value = 'num-' + value;
    } else {
        value = 'str-' + value;
    }
    if (local) local.setItem(key, value);
};
const getLocalStorage = function (key) {
    if (!key)  console.warn('key is empty');
    if (local) {
        var value = local.getItem(key);
        if (!value) return false;
        var v = value.slice(4);
        if (value.indexOf('obj-') === 0) {
            return JSON.parse(v);
        } else if (value.indexOf('boo-') === 0) {
            if (v==='true'){
                return true;
            } else {
                return false;
            }
        } else if (value.indexOf('num-') === 0) {
            return parseInt(v);
        } else {
            return v;
        }
    }
};
const removeLocalStorage = function (key) {
    if (!key)  console.warn('key is empty');
    if (local) local.removeItem(key);
};
const clearLocalStorage = function () {
    if (local) local.clear();
};

export {setSessionStorage, getSessionStorage, removeSessionStorage,clearSessionStorage,
    setLocalStorage, getLocalStorage,removeLocalStorage,clearLocalStorage};