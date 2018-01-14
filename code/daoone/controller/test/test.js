'use strict';
const test = require('../../business/test/test')
exports.test = async function(req, res) {

    logger.debug('测试请求报文：' + JSON.stringify(req.body))
    let retuMsg = await test.test(req);
    logger.debug('测试登录返回报文：' + JSON.stringify(retuMsg))
    res.status(200).json(retuMsg);
    return;
};