const express = require("express");
const router = express.Router();

//Importing controllers
const workshopsController = require("../controllers/workshops.controller");

//Return a list of workshops
router.get('/', workshopsController.findAll);

//Return details of specific workshop
router.get('/:title', workshopsController.findOne);

module.exports = router;