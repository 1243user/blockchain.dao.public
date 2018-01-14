/**
 */
'use strict';
class AdminLoginWeiXinResponse {
    constructor() {
        this.ret = {
            "head": {
                "channelNo": "",
                "transactionNo": "",
                "requestCode": "",
                "timeStamp": "",
                "errorCode": "",
                "errorMsg": ""
            },
            "body": {
                "userId": "testsysadmin",
                "userName": "22"
            }
        }
    }
}
module.exports = AdminLoginWeiXinResponse;