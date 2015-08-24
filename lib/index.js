'use strict';

var path = require('path');
var nconf = require('nconf');
var jsYaml = require('js-yaml');

module.exports = function(configDir) {

    var yaml = {
        parse: jsYaml.safeLoad,
        stringify: jsYaml.safeDump
    };

    nconf.argv();
    nconf.env();
    nconf.file('local', { file: path.join(configDir, 'local.yml'), format: yaml });
    nconf.file('defaults', { file: path.join(configDir, 'default.yml'), format: yaml });

    nconf.getRequired = function(key) {
        var val = nconf.get(key);
        if (typeof val === 'undefined') {
            throw new Error('Missing required config "' + key + '"');
        }
        return val;
    };

    return nconf;
};
