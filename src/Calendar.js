import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/esm/fp/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"

import React, { useState } from "react"
import DatePicker from "react-datepicker"

const locales = {
  "tr-TR": require("date-fns/locale/tr"),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2022, 7, 8),
    end: new Date(2022, 7, 8),
  },
  {
    title: "Hearing Test",
    start: new Date(2022, 7, 10),
    end: new Date(2022, 7, 12),
  },
  {
    title: "Hearing Aid Experience ",
    start: new Date(2022, 7, 14),
    end: new Date(2022, 7, 18),
  },
]

const CalendarComponent = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
  const [allEvents, setAllEvents] = useState(events)

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div>
      <h3>Add new event</h3>
      <input
        type="text"
        placeholder="Add Title"
        style={{ width: "200px", marginRight: "10px" }}
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="End Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Add Event
      </button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
      />
    </div>
  )
}

export default CalendarComponent
