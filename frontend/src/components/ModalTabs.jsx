import React, { useState, useContext, useEffect } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import EventForm from "./EventForm";
import TaskForm from "./TaskForm";

export const ModalTabs = () => {
  const { daySelected, dispatchCalEvent, dispatchCalTask, selectedEvent, selectedTask, setShowModalTabs, activeTab, setActiveTab } =
    useContext(GlobalContext);

  const [taskTitle, setTaskTitle] = useState(selectedTask ? selectedTask.title : "");

  const [eventTitle, setEventTitle] = useState(selectedEvent ? selectedEvent.title : "");

  const [startTime, setStartTime] = useState(
    selectedEvent ? new Date(selectedEvent.startTime) : daySelected.toDate()
  );

  const [endTime, setEndTime] = useState(
    selectedEvent ? new Date(selectedEvent.endTime) : daySelected.toDate()
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title: eventTitle,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      startTime: startTime,
      endTime: endTime,
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else if (activeTab !== "event") {
      handleCloseModal();
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    const calendarTask = {
      title: taskTitle,
      day: daySelected.valueOf(),
      id: selectedTask ? selectedTask.id : Date.now(),
    };
    if (selectedTask) {
      dispatchCalTask({ type: "update", payload: calendarTask });
    } else if (activeTab !== "task") {
      handleCloseModal();
    } else {
      dispatchCalTask({ type: "push", payload: calendarTask });
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setShowModalTabs(false);
  };

  const handleDeleteEvent = () => {
    dispatchCalEvent({ type: "delete", payload: selectedEvent });
    handleCloseModal(); // モーダルを閉じる
  };

  const handleDeleteTask = () => {
    dispatchCalTask({ type: "delete", payload: selectedTask });
    handleCloseModal(); // モーダルを閉じる
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (selectedEvent !== null) {
      handleTabChange("event");
    }
  }, [selectedEvent]);

  useEffect(() => {
    if (selectedTask !== null) {
      handleTabChange("task");
    }
  }, [selectedTask]);

  return (
    <div className="bg-white rounded-lg shadow-2xl w-1/4 fixed left-0 top-0">
      <header className="bg-gray-100 px-4 py-2 flex justify-end">
        <div className="text-gray-400">
          {selectedEvent !== null && activeTab === "event" && (
            <button onClick={handleDeleteEvent}>
              <MdDeleteForever />
            </button>
          )}
          {selectedTask !== null && activeTab === "task" && (
            <button onClick={handleDeleteTask}>
              <MdDeleteForever />
            </button>
          )}
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
      </header>
      <div className="p-3">
        <div className="flex">
          {selectedTask === null &&
            <button
              className={`mr-4 ${activeTab === "event" ? "text-blue-500" : "text-gray-500"
                }`}
              onClick={() => handleTabChange("event")}
            >
              Event
            </button>
          }
          {selectedEvent === null &&
            <button
              className={`${activeTab === "task" ? "text-blue-500" : "text-gray-500"
                }`}
              onClick={() => handleTabChange("task")}
            >
              Task
            </button>
          }
        </div>
        {activeTab === "event" ? (
          <EventForm
            daySelected={daySelected}
            title={eventTitle}
            startTime={startTime}
            endTime={endTime}
            setTitle={setEventTitle}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
        ) : (
          <TaskForm
            title={taskTitle}
            setTitle={setTaskTitle}
            daySelected={daySelected}
          />
        )}
      </div>
      <footer className="flex justify-end border-t p-3 mt-5">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
        >
          Save
        </button>
      </footer>
    </div>
  );
};
