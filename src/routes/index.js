const express = require("express");
const router = express.Router();

const eventRoute=require('./event.route')
const availabilityRoute= require('./availability.route')


router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

router.use('/events', eventRoute )
router.use('/availability', availabilityRoute )

module.exports = router;
