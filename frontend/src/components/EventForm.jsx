// EventForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = ({ title, startTime, endTime, setTitle, setStartTime, setEndTime }) => {
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
    </div>
  );
};

export default EventForm;
