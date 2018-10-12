const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        this.body = 'hello world!';
    }

    async jayAction() {
        const data = await this.getAll();
        return this.success(data);
    }
};
