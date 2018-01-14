'use strict';

const express = require('express')
const Test = require('../controller/test/test')
const router = express.Router()

// http://127.0.0.1:8001/daoone/test/test
router.post('/test', Test.test);

module.exports = router;