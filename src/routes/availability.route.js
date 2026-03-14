const express= require('express')
const router= express.Router()

const availabilityController= require('../controller/availability.controller')
const validate= require('../midleware/validate')
const { availability } = require('../until/validator')

router.post('/query', availability, validate, availabilityController.queryAvailabilityController)

module.exports= router