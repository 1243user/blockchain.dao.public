const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const index = require('./routes/index');
const app = express();
const environment = require('./config/environment')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

environment.makeEnv();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
1  Node写的后台需要处理http跨域请求
  当协议、子域名、主域名、端口号中任意一各不相同时，都算不同的“域”。
  * 不同的域之间相互请求资源，就叫“跨域”。
2  Node写的后台需要处理http跨域请求
  其实原理就是在返回头里加入允许跨域访问的返回头参数
  1是Access-Control-Allow-Origin 允许的域
  2是Access-Control-Allow-Headers 允许的header类型
  3是Access-Control-Allow-Methods 允许的请求方法

  这三项都可以设置为"*"表示接受任意类型的请求

3
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies

4  这里是自定义版本号
这个不是Apache或者Nginx输出的，而是由语言解析器或者应用程序框架输出的。
这个值的意义用于告知网站是用何种语言或框架编写的

res.header("X-Powered-By", '3.2.1')
* */
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use(cookieParser());


// 设置公共路由
index(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(global.config.port);
console.log('daoone project started at port: '+global.config.port+'...');

module.exports = app;
