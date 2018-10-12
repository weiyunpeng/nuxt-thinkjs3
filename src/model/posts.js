const Base = require('./base');

module.exports = class extends Base {
    /**
     * 获取推荐内容
     * @param stickys
     * @returns {Promise.<*>}
     */
    async getStickys(stickys, page = 1, pagesize) {
        const list = await this.where({
            id: ['IN', stickys]
            // 按 IN 条件的顺序查询出结果
        })
            .order(`INSTR (',${stickys},', CONCAT(',',id,','))`)
            .page(page, pagesize)
            .countSelect();
        return list;
    }
};
