const router = require('express').Router();

const galleryController = require('../controllers/gallery.controller');

router.get('/',galleryController.findAll);

module.exports = router;