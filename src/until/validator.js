const { body } = require("express-validator");

const createCalendar = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("title is required")
        .isLength({ min: 2, max: 255 })
        .withMessage("Name must be between 2 and 255 characters"),

    body("start_at")
        .notEmpty()
        .withMessage("start_at is required")
        .isISO8601()
        .withMessage("start_at must be a valid ISO8601 datetime"),

    body("end_at")
        .notEmpty()
        .withMessage("end_at is required")
        .isISO8601()
        .withMessage("end_at must be a valid ISO8601 datetime"),


    body("timezone")
        .trim()
        .notEmpty()
        .withMessage("timezone is required"),

    body("type")
        .notEmpty()
        .withMessage("type is required")
        .isIn(["APPOINTMENT","BLOCK"])
        .withMessage("type must be APPOINTMENT or BLOCK"),

];

const availability = [
    body("workingHours.start")
        .notEmpty()
        .withMessage("start_at is required")
        .isISO8601()
        .withMessage("start_at must be a valid ISO8601 datetime"),

    body("workingHours.end")
        .notEmpty()
        .withMessage("end_at is required")
        .isISO8601()
        .withMessage("end_at must be a valid ISO8601 datetime"),

]

module.exports = {
  createCalendar,
  availability
};
