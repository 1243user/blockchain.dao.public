'use strict';
const AdminLoginWeiXinResponse = require('../../models/admin/AdminLoginWeiXinResponse')

exports.test = async function(req) {

    let adminLoginWeiXinResponse = new AdminLoginWeiXinResponse();
    adminLoginWeiXinResponse.ret.head.errorCode = '0' ;
    adminLoginWeiXinResponse.ret.head.errorMsg = '成功';
    try{
        let userId = req.body.body.userId || '';
        let userName = req.body.body.userName || '';
        let params = [userId, userName];
        await global.mysqlConn.poolQueryBeginTransaction();
        let params1 = ['12', 'dfdf'];
        let sql1 = 'insert into test values(?,?)';
        let ret1 = await global.mysqlConn.poolQuery(sql1, params1);
        throw new Error('密码参数错误');
        let params2 = ['13', 'dfd'];
        let sql2 = 'insert into test values(?,?)';
        let ret2 = await global.mysqlConn.poolQuery(sql2, params2);
        await global.mysqlConn.poolQueryCommit();
        let sql = 'select * from test where userId = ? and userName = ? ';
        let ret = await global.mysqlConn.poolQuery(sql, params);
        adminLoginWeiXinResponse.ret.body.userId = ret[0].userId;
        adminLoginWeiXinResponse.ret.body.userName = ret[0].userName;
    }catch(e){
        await global.mysqlConn.poolQueryRollback();
        logger.debug('而是请求异常：' + e.message)
        adminLoginWeiXinResponse.ret.head.errorCode = '1' ;
        adminLoginWeiXinResponse.ret.head.errorMsg = e.message;
    }
    return adminLoginWeiXinResponse.ret;
};