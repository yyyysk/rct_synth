const express = require('express');
const router = express.Router();
const patchApi = require('./patch-api');

console.log(patchApi);
// パッチ作成
router.post('/v1/patch/create', patchApi.create);
// パッチページング
router.get('/v1/patch/get', patchApi.getAll);

module.exports = router;
