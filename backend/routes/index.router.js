const router = require('express').Router();

//Importing routers
const eventsRouter = require('./events.router');
const workshopsRouter = require('./workshops.router');
const tronicalsRouter = require('./tronicals.router');
const srRouter = require('./sr.router');
const teamRouter = reqire('./team.router');
const ccaRouter = require('./cca.router');
const eurekaRouter = require('./eureka.router');

//Setting up routers
router.use('/events', eventsRouter);
router.use('/workshops', workshopsRouter);
router.use('/tronicals', tronicalsRouter);
router.use('/sr', srRouter);
router.use('/team', teamRouter);
router.use('/cca/apply', ccaRouter);
router.use('/eureka/apply', eurekaRouter);

module.exports = router;