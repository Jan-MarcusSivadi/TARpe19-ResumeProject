const express = require('express');
const CVController = require('../controllers/CVController');
const router = express.Router();

/// Routes
// home page
router.get('/', CVController.getHomePage);

// admin page
router.get('/admin', CVController.getAdminPage);

// post CV
router.post('/add-doc', CVController.getAddDoc);

// post CV
router.post('/create-doc', CVController.postAddDoc);

// admin page
router.get('/admin/json', CVController.getJson);

// delete mongoDB
router.get('/DB_delete', CVController.DBDelete);

module.exports = router;