// EventForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

const EventForm = ({ title, startTime, endTime, description, color, setTitle, setStartTime, setEndTime, setDescription, setColor }) => {
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Add title"
        value={title}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        Start<br></br>
        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <br></br>
      <label>
        End<br></br>
        <DatePicker
          selected={endTime}
          onChange={(date) => setEndTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <input
        type="text"
        name="description"
        placeholder="Add description"
        value={description}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* ここ数色から選べるように変更したい */}
      <input
        type="text"
        name="color"
        placeholder="Select color"
        value={color}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};


EventForm.propTypes = {
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setStartTime: PropTypes.func.isRequired,
  setEndTime: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default EventForm;
