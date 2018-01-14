'use strict';
const adminBusiness = require('../../business/admin/adminBusiness')
exports.loginWeiXin = async function(req, res) {

    logger.debug('微信登录请求报文：' + JSON.stringify(req.body))
    let retuMsg = await adminBusiness.loginWeiXinBusiness(req);
    logger.debug('微信登录返回报文：' + JSON.stringify(retuMsg))
    res.status(200).json(retuMsg);
    return;
};