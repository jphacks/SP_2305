// AfterTask.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';


const AfterTask = ({ taskActualTime, taskDone, taskProgress,
  setTaskActualTime, setTaskDone, setTaskProgress }) => {
  return (
    <div>
      <input
        type="number"
        name="taskActualTime"
        placeholder="How long did it take?"
        value={taskActualTime}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskActualTime(e.target.value)}
      />
      <input
        type="text"
        name="taskDone"
        placeholder="Done or not"
        value={taskDone}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskDone(e.target.value)}
      />

      <input
        type="number"
        name="taskProgress"
        placeholder="percentage of your task"
        value={taskProgress}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskProgress(e.target.value)}
      />
      {/* <p>{daySelected.format("dddd, MMMM DD")}</p> */}
    </div >
  );
};

AfterTask.propTypes = {
  taskActualTime: PropTypes.number.isRequired,
  taskDone: PropTypes.bool.isRequired,
  taskProgress: PropTypes.number.isRequired,

  setTaskActualTime: PropTypes.func.isRequired,
  setTaskDone: PropTypes.func.isRequired,
  setTaskProgress: PropTypes.func.isRequired,
}

export default AfterTask;
