const express= require('express')
const router= express.Router()

const eventController= require('../controller/event.controller')
const validate= require('../midleware/validate')
const { createCalendar } = require('../until/validator')


router.get('/', eventController.getEvents)
router.post('/', createCalendar, validate, eventController.CreateEvent)

module.exports= router