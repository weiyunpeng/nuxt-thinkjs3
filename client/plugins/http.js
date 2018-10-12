import Fly from 'flyio';
const querystring = require('querystring');

const request = new Fly();

request.config.timeout = 10 * 1000;
const IS_DEV = 'server';

if (IS_DEV === 'server') {
    request.config.baseURL = 'https://itrip.qq.com'; // 生产接口
} else if (IS_DEV === 'dev') {
    request.config.baseURL = 'https://hermes.qqdayu.com'; // 测试接口
} else if (IS_DEV === 'local') {
    request.config.baseURL = 'http://127.0.0.1:8887'; // 本地接口
}

request.interceptors.request.use(request => {
    if (request.method === 'POST') {
        const params = request.body;
        request.body = querystring.stringify(params);
    }
    return request;
});

request.interceptors.response.use(
    async (response, promise) => {
        return promise.resolve(response.data);
    },
    (err, promise) => {
        console.log(err);
        return promise.resolve();
    }
);

export default request;
