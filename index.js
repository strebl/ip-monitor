'use strict';

var Watcher = require('./lib/watcher').Watcher;
var utils = require('./lib/utils');
var myIP = require('my-ip');


module.exports.createWatcher = function (extConfig) {
    extConfig = extConfig || {};
    var isValid = utils.validateConfig(extConfig);
    if(isValid.errors.length) {
        throw new Error(isValid.errors);
    }

    var defaultConfig = {
        polling: 20000
    };

    var config = utils.mergeConfig(extConfig, defaultConfig);

    return new Watcher(myIP, config);
};