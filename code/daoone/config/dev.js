module.exports = {
	port:8001,
    project:'daoone',
	mysql : {
		host : '127.0.0.1',
		user : 'lis',
		password : '123',
		database : 'daoone',
		port : 3306,
        connectionLimit:500
	},
    log:{
        appenders: {
            policy: {
                type: 'file',
                filename: './logs/',
                maxLogSize: 10000000,
                pattern: 'yyyy-MM-dd-hh.log'
            }
        },
        categories: { default: { appenders: ['policy'], level: 'debug' } }
    },
    getEncruptToken:'jkdkdk987'
};