# blockchain.dao.public
0 目录
    1项目技术栈
    2项目目录说明
    3服务器部署方法
    4查看进程方法 forever list
    5项目停止方法


1项目技术栈
    node 最新版本
    mysql 5.6


2项目目录说明
    app.js 起动文件   startfile
    routes index 请求入口   request file
    models 实体类
    logs 日志目录
    controller 处理的controller
    config  配置文件位置
    business  详细处理过程


3服务器部署方法
    3.1安装nodejs
        安装并且配置环境变量
        http://blog.csdn.net/u010833605/article/details/50282139

    3.2上传项目,进行install操作,安装依赖包

    3.3起动方法
        forever start app.js  daoone
        起动文件说明
            forever start 这个是forever的命令
            app.js 这个是项目起动文件
            daoone 这个是项目起动说明文件,可以是汉语


4查看进程方法 forever list
        实例：
        [root@localhost nodeproject]# forever list
        info:    Forever processes running
        data:        uid  command                                      script forever pid  id logfile                         uptime
        data:    [0] 1X0M /home/ghlinux/node-v8.9.4-linux-x64/bin/node app.js 2103    2109    /home/ghlinux/.forever/1X0M.log 0:0:0:3.795

          如果看到这样的就是起动成功

          这个是日志文件,每次起动可能不一样 /home/ghlinux/.forever/1X0M.log
          tail -f /home/ghlinux/.forever/1X0M.log
          也可以去项目里面，项目里面也有日志文件,记录内容一样


5项目停止方法
        forever stop pid
        当然也可以杀死进程的方式停止服务



6 添加


