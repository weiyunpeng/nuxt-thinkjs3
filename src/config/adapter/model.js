/* eslint-disable no-undef */
/**
 * model adapter config
 * @type {Object}
 */
const mysql = require('think-model-mysql');
const isDev = think.env === 'development';

module.exports = {
    type: 'mysql',
    common: {
        charset: 'UTF8MB4',
        logConnect: isDev,
        logSql: isDev,
        logger: msg => think.logger.info(msg)
    },
    mysql: {
        logConnect: isDev,
        handle: mysql,
        database: 'nideshop',
        prefix: 'nideshop_',
        // charset: 'UTF8MB4',
        charset: 'UTF8MB4_GENERAL_CI',
        // debug: true,
        host: isDev ? '127.0.0.1' : '127.0.0.1',
        port: isDev ? '3306' : '3377',
        user: 'root',
        password: '123456',
        dateStrings: true
    }
};
