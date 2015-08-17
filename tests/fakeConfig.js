function FakeConfig(config) {
    this.config = config;
}

FakeConfig.prototype.get = function(key) {
    return this.config[key];
};

FakeConfig.prototype.getRequired = function(key) {
    var value = this.config[key];
    if (!value) {
        throw new Error('Required key "' + key + '" not found in fake config');
    }
    return value;
};

module.exports = FakeConfig;