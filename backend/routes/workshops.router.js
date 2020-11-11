const express = require("express");
const router = express.Router();

//Importing controllers
const workshopsController = require("../controllers/workshops.controller");

//Return a list of workshops
router.get('/workshops', workshopsController.findAll);

//Return information about specific workshop
router.get('/workshops/:id', workshopsController.findOne);

module.exports = router;