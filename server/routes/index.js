const attendees = require('./api/attendees');

module.exports = (app) => {
    app.use('/', attendees);
};
