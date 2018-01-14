/**
 */
'use strict';
class AdminLoginWeiXinRequest {
    constructor() {
        this.ret = {
            "head":{
                "channelNo": "",
                "transactionNo": "",
                "requestCode": "",
                "timeStamp": ""
            },
            "body": {
                "userId": "testsysadmin",
                "userName": "22"
            }
        }
    }
}
module.exports = AdminLoginWeiXinRequest;