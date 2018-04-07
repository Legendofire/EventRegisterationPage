const Attendee = require('.././models/Attendee');

exports.addAttendee = function (req, res, next) {
    let attendee = new Attendee(req.body.formData);
    attendee.save((err, data) => {
        if (err) { res.json({ message: "Ops, Something wrong happened!" }); }
        res.json({
            message: "Attendee Added Successfully!",
            data: data
        });
    });
};
