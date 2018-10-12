module.exports = class extends think.Model {
    constructor(...args) {
        super(...args);
        this.appId = 'S11SeYT2W';
        this.prefix = 'picker_';
    }

    get tablePrefix() {
        return 'picker_' + this.appId;
    }
}
