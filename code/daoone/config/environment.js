
const mysql = require('mysql');
const DAO = require('./mysqlConnection/dbUtil');
const Pool = require('./mysqlConnection/Pool').Pool;
const Log = require('./log/index')

exports.makeEnv = async function () {

    global.config = require('./dev.js')
    console.log('起动文件打印===='+JSON.stringify(global.config));
    /**
     起动的时候将mysql链接进行初始化
     */
    var pool = new Pool(global.config.mysql);
    global.mysql = new DAO(pool);
    global.logger = new Log();
}
