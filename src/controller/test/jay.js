const Base = require('./Base.js');

module.exports = class extends Base {
    indexAction() {
        this.body = 'hello world!';
    }

    async jayAction() {
        const data = await this.model('address').where({id: 3}).find();
        return this.success(data, 'success');
    }
};
