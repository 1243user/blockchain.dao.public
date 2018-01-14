
const log4js = require('log4js')

var LOG = function() {

    try{
        global.config.log.appenders.policy.filename+=this.getDateTime();
        global.config.log.appenders.policy.filename+='.log';
        log4js.configure(global.config.log);
        this.log=log4js.getLogger('policy');
        this.log.level= global.config.log.categories.default.level;
    }catch(e){
        console.log(e);
    }


};

LOG.prototype.debug=function(msg) {
    console.log(msg);
    this.log.debug(msg);
};

LOG.prototype.info=function(msg) {
    console.log(msg);
    this.log.info(msg);
};

LOG.prototype.error = function(msg) {
        msg=msg.toString().replace(/\n/g,' ');
        console.log(msg);
        this.log.error(msg);
};

LOG.prototype.getDateTime = function(timestamp) {
    var timesTemp = timestamp ? new Date(timestamp) : new Date();
    var yy = timesTemp.getFullYear();
    var MM = timesTemp.getMonth();
    var dd = timesTemp.getDate();
    var hours = timesTemp.getHours();//获取当前时
    // value of MM from 0 to 11
    //alert((new Date('2015-08-23 12:23:22')).getHours());
    //alert((new Date('2015-12-31 12:23:22')).getMonth());
    // MM === 0 ? MM=12:MM++;
    MM++;
    // fixed time format
    MM < 10 ? MM = '0'.concat(MM):null;
    dd < 10 ? dd = '0'.concat(dd):null;
    hours < 10 ? hours = '0'.concat(hours):null;
    return '' + yy + '-' + MM + '-' + dd + '-' + hours;
};

module.exports = LOG;