const eventService= require('../services/event.service')


const CreateEvent= async(req,res, next)=> {
    try {
        const event= await eventService.CreateEvent(req.body)
        return res.status(201).json({
                success: true,
                data: event
            });

    }catch(error) {
    return res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal server error"
        });

    }
}
const getEvents= async(req, res)=> {

    const {rows, count}= await eventService.getEvents( req.query )
    return res.status(201).json({
                success: true,
                data: rows,
                pagination: {
                    total: count
                }
            });

}

module.exports= {CreateEvent, getEvents}