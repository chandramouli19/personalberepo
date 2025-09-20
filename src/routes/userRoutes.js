const express = require('express');
const router = express.Router();
const userinfoController = require('../controller/userinfoController')

router.post('/create-user',userinfoController.createUser)
router.get('/userinfo',userinfoController.getUserinfo)
router.get('/getUser',userinfoController.getUser)
router.delete('/delete-all',userinfoController.deleteWholeData)


module.exports = router;
