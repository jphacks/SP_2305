// AfterTask.js
import React, { useContext } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import GlobalContext from "../context/GlobalContext";
import { Select } from "@chakra-ui/react";


const AfterTask = () => {
    const {taskActualTime, setTaskActualTime } = useContext(GlobalContext);
    const numberOptions = Array.from({ length: 300 }, (_, index) => index + 1);

  return (
    <div>
     <p>タスク完了おつかれさまです！ フィードバック調節のために所要時間を登録しましょう！</p>
     <p>所要時間</p>
      <Select
        value={taskActualTime}
        onChange={(e) => setTaskActualTime(e.target.value)}
        placeholder="1"
      >
        {numberOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <p>分</p>
    </div >
  );
};

// AfterTask.propTypes = {
//   taskActualTime: PropTypes.number.isRequired,
//   taskDone: PropTypes.bool.isRequired,
//   taskProgress: PropTypes.number.isRequired,

//   setTaskActualTime: PropTypes.func.isRequired,
//   setTaskDone: PropTypes.func.isRequired,
//   setTaskProgress: PropTypes.func.isRequired,
// }

export default AfterTask;
