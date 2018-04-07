let router = require('express').Router();

const AttendeeController = require('../../controllers/attendees');

router.post('/', AttendeeController.addAttendee);

module.exports = router;
