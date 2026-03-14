const { Op } = require("sequelize");
const  Event  = require("../models/event.model");


const CreateEvent= async(data)=> {
  const { title, start_at, end_at, timezone, type } = data;

  const owner_id= "3aa0f1ff-c6d6-4d61-9e1c-9a221e41565d"

  const startDate = new Date(start_at)
  const endDate = new Date(end_at)


  if (startDate >= endDate ) { 
      throw new Error("start_at must be before end_at");
  }
  const overlap = await Event.findOne({
      where: {
          owner_id,
          start_at: { [Op.lt]: endDate  },
          end_at: { [Op.gt]: startDate }
      }
  });
  if (overlap) {
      const error = new Error("Event time overlap");
      error.statusCode = 409;
      throw error;
  }

  const event = await Event.create({
    title,
    type,
    start_at: startDate,
    end_at: endDate ,
    owner_id,
    timezone
  });

  return event;
};

const getEvents= async(query)=> {
  const { from, to, ownerId } = query

  const where = {}
  if(ownerId) {
    where.owner_id= ownerId
  }
  
  if (from && to) {
    where.start_at = { [Op.lt]: new Date(to) }
    where.end_at = { [Op.gt]: new Date(from) }
  }
  const {rows, count}=await Event.findAndCountAll({
    where,
    order: [['start_at', 'ASC']]
  })
  return {rows, count}
}


module.exports = {CreateEvent, getEvents}
