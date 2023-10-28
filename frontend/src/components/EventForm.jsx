// EventForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

const EventForm = ({ eventTitle, eventStartTime, eventEndTime, eventDescription, eventColor, setEventTitle, setEventStartTime, setEventEndTime, setEventDescription, setEventColor }) => {
  return (
    <div>
      <input
        type="text"
        name="eventTitle"
        placeholder="Add title"
        value={eventTitle}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <label>
        Start<br></br>
        <DatePicker
          selected={eventStartTime}
          onChange={(date) => setEventStartTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <br></br>
      <label>
        End<br></br>
        <DatePicker
          selected={eventEndTime}
          onChange={(date) => setEventEndTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <input
        type="text"
        name="eventDescription"
        placeholder="Add description"
        value={eventDescription}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setEventDescription(e.target.value)}
      />
      {/* ここ数色から選べるように変更したい */}
      <input
        type="color"
        name="eventColor"
        placeholder="Select color"
        value={eventColor}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setEventColor(e.target.value)}
      />
    </div>
  );
};


// EventForm.propTypes = {
//   eventTitle: PropTypes.string.isRequired,
//   eventStartTime: PropTypes.object.isRequired,
//   eventEndTime: PropTypes.object.isRequired,
//   eventDescription: PropTypes.string.isRequired,
//   eventColor: PropTypes.string.isRequired,

//   setEventTitle: PropTypes.func.isRequired,
//   setEventStartTime: PropTypes.func.isRequired,
//   setEventEndTime: PropTypes.func.isRequired,
//   setEventDescription: PropTypes.func.isRequired,
//   setEventColor: PropTypes.func.isRequired,
// };

export default EventForm;
