const router = require('express').Router();

const eventsController = require('../controllers/gallery.controller');

router.get('/',eventsController.findAll);

module.exports = router;