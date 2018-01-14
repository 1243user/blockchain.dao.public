/*
 这个文件是总的入口
* */

let admin = require('./admin');
let comment = require('./comment');
let test = require('./test');

module.exports = function (app) {

    app.use('/daoone/test', test);
    app.use('/daoone/admin', admin);
    app.use('/daoone/comment', comment);
};
