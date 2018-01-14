'use strict';

const express = require('express')
const Admin = require('../controller/admin/admin')
const router = express.Router()

// http://127.0.0.1:8001//daoone/admin/login
router.post('/login', Admin.loginWeiXin);
// router.get('/singout', Admin.singout);

module.exports = router;