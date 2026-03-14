
const availabilityService = require('../services/availability.service')
const queryAvailabilityController = async (req, res) => {
    try{
        
        const slots = await availabilityService.queryAvailability(
            req.body
        )

        res.status(201).json({
            success: true,
            availableSlots: slots
        })

    }catch(error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { queryAvailabilityController }