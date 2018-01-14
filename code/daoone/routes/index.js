/*
 这个文件是总的入口
* */

let admin = require('./admin');
let comment = require('./comment');

module.exports = function (app) {

    app.use('/daoone/admin', admin);
    app.use('/daoone/comment', comment);
};
