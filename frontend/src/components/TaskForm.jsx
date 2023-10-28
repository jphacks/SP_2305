// TaskForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';


const TaskForm = ({ taskTitle, taskType, taskStartTime, taskEndTime, taskDeadline, taskEst, taskDescription, taskColor, taskRepeat,
  setTaskTitle, setTaskType, setTaskStartTime, setTaskEndTime, setTaskDeadline, setTaskEst, setTaskDescription, setTaskColor, setTaskRepeat }) => {
  return (
    <div>
      <input
        type="text"
        name="taskTitle"
        placeholder="Add title"
        value={taskTitle}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        type="text"
        name="taskType"
        placeholder="Select task type"
        value={taskType}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskType(e.target.value)}
      />

      <label>
        Start<br></br>
        <DatePicker
          selected={taskStartTime}
          onChange={(date) => setTaskStartTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <br></br>
      <label>
        End<br></br>
        <DatePicker
          selected={taskEndTime}
          onChange={(date) => setTaskEndTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <br></br>
      <label>
        Deadline<br></br>
        <DatePicker
          selected={taskDeadline}
          onChange={(date) => setTaskDeadline(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, h:mm aa"
        />
      </label>
      <input
        type="number"
        name="taskEst"
        placeholder="task time Estimate"
        value={taskEst}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskEst(e.target.value)}
      />
      <input
        type="text"
        name="taskDescription"
        placeholder="Add description"
        value={taskDescription}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <input
        type="color"
        name="taskColor"
        placeholder="Select color"
        value={taskColor}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskColor(e.target.value)}
      />
      <input
        type="number"
        name="taskRepeat"
        placeholder="how many times do the task"
        value={taskRepeat}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskRepeat(e.target.value)}
      />


      {/* <p>{daySelected.format("dddd, MMMM DD")}</p> */}
    </div>
  );
};

// TaskForm.propTypes = {
//   taskTitle: PropTypes.string.isRequired,
//   taskType: PropTypes.string.isRequired,
//   taskStartTime: PropTypes.object.isRequired,
//   taskEndTime: PropTypes.object.isRequired,
//   taskDeadline: PropTypes.object.isRequired,
//   taskEst: PropTypes.number.isRequired,
//   taskDescription: PropTypes.string.isRequired,
//   taskColor: PropTypes.string.isRequired,
//   taskRepeat: PropTypes.number.isRequired,

//   setTaskTitle: PropTypes.func.isRequired,
//   setTaskType: PropTypes.func.isRequired,
//   setTaskStartTime: PropTypes.func.isRequired,
//   setTaskEndTime: PropTypes.func.isRequired,
//   setTaskDeadline: PropTypes.func.isRequired,
//   setTaskEst: PropTypes.func.isRequired,
//   setTaskDescription: PropTypes.func.isRequired,
//   setTaskColor: PropTypes.func.isRequired,
//   setTaskRepeat: PropTypes.func.isRequired,
// }

export default TaskForm;
