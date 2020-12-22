const router = require('express').Router();

const tronicalController = require("../controllers/tronicals.controller");

//Return a list of all tronicals
router.get('/',tronicalController.findAll);

//Return the details of a tronical
router.get('/:title',tronicalController.findOne);

module.exports = router;
