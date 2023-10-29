// TaskForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import { Select, Switch, FormControl, FormLabel } from "@chakra-ui/react";


const TaskForm = ({ taskTitle, taskType, taskStartTime, taskEndTime, taskDeadline, taskEstNumber, taskEstUnit, forNumber, frequencyUnit, taskDescription, taskColor, taskRepeat,
  setTaskTitle, setTaskType, setTaskStartTime, setTaskEndTime, setTaskDeadline, setTaskEstNumber, setTaskEstUnit, setForNumber, setFrequencyUnit, setTaskDescription, setTaskColor, setTaskRepeat }) => {

  // カラースタイルの選択肢
  const colorOptions = [
    { label: "Red", style: "bg-red-pale border-red-dark" },
    { label: "Blue", style: "bg-blue-pale border-blue-dark" },
    { label: "Green", style: "bg-green-pale border-green-dark" },
    { label: "Yellow", style: "bg-yellow-pale border-yellow-dark" },
    // 他の色の選択肢を追加
  ];

  const numberOptions = Array.from({ length: 60 }, (_, index) => index + 1);

  const unitOptions = [
    { label: "分", value: "minute" },
    { label: "日", value: "day" },
  ]

  const frequencyUnitOptions = [
    { label: "週間", value: "week" },
    { label: "ヶ月", value: "month" },
    { label: "年", value: "year" }
  ]

  return (
    <div>
      <input
        type="text"
        name="taskTitle"
        placeholder="タイトルを入力してください"
        value={taskTitle}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      {/* タスクタイプのスイッチボタン */}
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="taskType" mb="0">
          {taskType === "deadLineTrue" ? "締切あり" : "締切なし"}
        </FormLabel>
        <Switch
          id="taskType"
          isChecked={taskType === "deadLineTrue"} // タスクタイプに応じて条件を設定
          onChange={() =>
            setTaskType(taskType === "deadLineFalse" ? "deadLineTrue" : "deadLineFalse")
          }
        />

        {taskType === "deadLineTrue"
          ? (
            <>
              <label htmlFor="taskDeadline">
                締切
              </label>
              <DatePicker
                selected={taskDeadline}
                onChange={(date) => setTaskDeadline(date)}
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="MM/d, hh:mm"
                id="taskDeadline"
              />
            </>
          ) : (
            <>
              <Select
                value={forNumber}
                onChange={(e) => setForNumber(e.target.value)}
                placeholder="1"
              >
                {numberOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <p>回 / 1</p>
              <Select
                value={frequencyUnit}
                onChange={(e) => setFrequencyUnit(e.target.value)}
                placeholder="週間"
              >
                {frequencyUnitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </>
          )}
      </FormControl>
      タスク量
      <Select
        value={taskEstNumber}
        onChange={(e) => setTaskEstNumber(e.target.value)}
        placeholder="1"
      >
        {numberOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Select
        value={taskEstUnit}
        onChange={(e) => setTaskEstUnit(e.target.value)}
        placeholder="時間"
      >
        {unitOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {taskType === "deadLineTrue" && (
        <>
          <p>×</p>
          <Select
            value={taskRepeat}
            onChange={(e) => setTaskRepeat(e.target.value)}
            placeholder="1"
          >
            {numberOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <p>回</p>
        </>
      )}
      <br></br>
      <label htmlFor="taskDescription">備考欄</label>
      <textarea
        type="textarea"
        name="taskDescription"
        placeholder="コメントを入力"
        value={taskDescription}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        onChange={(e) => setTaskDescription(e.target.value)}
        id="taskDescription"
      />
      <Select
        value={taskColor}
        onChange={(e) => setTaskColor(e.target.value)}
        placeholder="ラベルの色を選択してください"
      >
        {colorOptions.map((option) => (
          <option key={option.style} value={option.style}>
            {option.label}
          </option>
        ))}
      </Select>
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
