// EventForm.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import { Select } from "@chakra-ui/react";

const EventForm = ({ eventTitle, eventStartTime, eventEndTime, eventDescription, eventColor, setEventTitle, setEventStartTime, setEventEndTime, setEventDescription, setEventColor }) => {


  const colorOptions = [
    { label: "Red", style: "bg-red-pale border-red-dark" },
    { label: "Blue", style: "bg-blue-pale border-blue-dark" },
    { label: "Green", style: "bg-green-pale border-green-dark" },
    { label: "Yellow", style: "bg-yellow-pale border-yellow-dark" },
    // 他の色の選択肢を追加
  ];

  return (
    <div>
      <input
        type="text"
        name="eventTitle"
        placeholder="タイトルを入力"
        value={eventTitle}
        required
        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <label htmlFor="eventStartTime">
        開始時間
      </label>
      <DatePicker
        selected={eventStartTime}
        onChange={(date) => setEventStartTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MM/d, hh:mm"
        id="eventStartTime"
      />

      <br></br>
      <label htmlFor="eventEndTime">
        終了時間
      </label>
      <DatePicker
        selected={eventEndTime}
        onChange={(date) => setEventEndTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MM/d, hh:mm"
        id="eventEndTime"
      />
      <br></br>
      <label htmlFor="eventDescription">備考欄</label>
      <textarea
        type="textarea"
        name="eventDescription"
        placeholder="コメントを入力"
        value={eventDescription}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        onChange={(e) => setEventDescription(e.target.value)}
        id="eventDescription"
      />
      <Select
        value={eventColor}
        onChange={(e) => setEventColor(e.target.value)}
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
