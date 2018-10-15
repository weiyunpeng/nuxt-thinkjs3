const Base = require('./Base.js');
const httpx = require('httpx');

module.exports = class extends Base {
    indexAction() {
        this.body = 'hello world!';
    }

    async mysqlAction() {
        const data = await this.model('address')
            .where({ id: 3 })
            .find();
        return this.success(data, 'success');
    }

    async ajaxAction() {
        const response = await httpx.request('https://tieba.baidu.com/index.html');
        const text = await httpx.read(response, 'utf8');
        this.body = text;
    }
};
