const router = require('express').Router();
const events = require('./events');
const workshops = require('./workshops');
const tronicals = require('./tronicals');
const sr = require('./sr');
const team = reqire('./team');

router.use('/events', events);
router.use('/workshops', workshops);
router.use('./tronicals', tronicals);
router.use('./sr', sr);
router.use('./team', team);

module.exports = router;