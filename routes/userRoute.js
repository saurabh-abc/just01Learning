const router = require('express').Router();
const userController = require('../controller/userController');
router.route('/getprofile').get(userController.getProfile)
module.exports = router;