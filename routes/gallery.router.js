const router = require('express').Router();

const galleryController = require('../controllers/gallery.controller');

<<<<<<< HEAD
router.get('/', galleryController.findAll);
=======
router.get('/',galleryController.findAll);
>>>>>>> 11fdf0b1708119177d3d8a2595f933600e1315ed

module.exports = router;