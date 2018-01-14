'use strict';
const AdminLoginWeiXinResponse = require('../../models/admin/AdminLoginWeiXinResponse')

exports.loginWeiXinBusiness = async function(req) {

    let userId = req.body.body.userId || '';
    let userName = req.body.body.userName || '';
    let adminLoginWeiXinResponse = new AdminLoginWeiXinResponse();
    let params = [userId, userName];
    let sql = 'select * from test where userId = ? and userName = ? ';
    let ret = await global.mysql.poolQuery(sql, params);
    adminLoginWeiXinResponse.ret.head.errorCode = '0' ;
    adminLoginWeiXinResponse.ret.head.errorMsg = '成功';
    adminLoginWeiXinResponse.ret.body.userId = ret[0].userId;
    adminLoginWeiXinResponse.ret.body.userName = ret[0].userName;
    return adminLoginWeiXinResponse.ret;
};