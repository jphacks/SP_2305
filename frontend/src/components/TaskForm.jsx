// TaskForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';


const TaskForm = ({ title, setTitle, daySelected }) => {
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
      <p>{daySelected.format("dddd, MMMM DD")}</p>
    </div>
  );
};

export default TaskForm;
