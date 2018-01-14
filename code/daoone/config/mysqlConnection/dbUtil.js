/**
  参考案例
 https://www.cnblogs.com/AskySun/p/4778388.html
 */
var DAO = function(pool) {
    this.pool = pool;
};
DAO.prototype.poolQuery = async function(sql,params){
    try{
        let result = await this.pool.query(sql,params);
        return result;
    }catch(e){
        logger.error(e.message);
        console.log(e.message);
        throw e;
    }
}
DAO.prototype.poolQuerySql = async function(sql){
    try{
        let result = await this.pool.query(sql);
        return result;
    }catch(e){
        logger.error(e.message);
        console.log(e.message);
        throw e;
    }
}
DAO.prototype.poolQueryBeginTransaction = async function(){
    try{
        await this.pool.beginTransaction();
        console.log('当前开启事物id：'+this.pool.threadId());
    }catch(e){
        logger.debug(e.message);
        console.log(e.message);
        throw e;
    }
}
DAO.prototype.poolQueryCommit = async function(){
    try{
        await this.pool.commit();
        console.log('关闭当前事物id：'+this.pool.threadId());
    }catch(e){
        logger.debug(e.message);
        console.log(e.message);
        throw e;
    }
}
module.exports = DAO;