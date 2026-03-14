const { Op } = require("sequelize")
const Event = require("../models/event.model")



const queryAvailability = async ({ workingHours }) => {

  const owner_id= "3aa0f1ff-c6d6-4d61-9e1c-9a221e41565d"
  const {start, end} = workingHours

  const events = await Event.findAll({
    where: {
      owner_id: owner_id,
      start_at: { [Op.lt]: end },
      end_at: { [Op.gt]: start }
    },
    order: [["start_at", "ASC"]]
  })

  const slots = []
  let cursor = start

  for (const event of events) {

    const eventStart = new Date(event.start_at)
    const eventEnd = new Date(event.end_at)

    if (eventStart > cursor) {
      slots.push({
        start: cursor,
        end: eventStart
      })
    }

    if (eventEnd > cursor) {
      cursor = eventEnd
    }
  }

  if (cursor < end) {
    slots.push({
      start: cursor,
      end: end
    })
  }

  return slots
}

module.exports = { queryAvailability }