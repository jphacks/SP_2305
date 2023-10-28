import React, { useState, useContext, useEffect } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import EventForm from "./EventForm";
import TaskForm from "./TaskForm";
import AfterTask from "./AfterTask";

export const ModalTabs = () => {
  const { daySelected, dispatchCalEvent, dispatchCalTask, selectedEvent, selectedTask, setShowModalTabs, activeTab, setActiveTab } =
    useContext(GlobalContext);

  const [eventTitle, setEventTitle] = useState(
    selectedEvent ? selectedEvent.eventTitle : "");

  const [eventStartTime, setEventStartTime] = useState(
    selectedEvent ? new Date(selectedEvent.eventStartTime) : daySelected.toDate()
  );

  const [eventEndTime, setEventEndTime] = useState(
    selectedEvent ? new Date(selectedEvent.eventEndTime) : daySelected.toDate()
  );

  const [eventDescription, setEventDescription] = useState(
    selectedEvent ? selectedEvent.eventDescription : "");

  const [eventColor, setEventColor] = useState(
    selectedEvent ? selectedEvent.eventColor : "");

  const [taskTitle, setTaskTitle] = useState(
    selectedTask ? selectedTask.taskTitle : "");

  const [taskType, setTaskType] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskStartTime, setTaskStartTime] = useState(
    selectedTask ? new Date(selectedTask.taskStartTime) : daySelected.toDate()
  );

  const [taskEndTime, setTaskEndTime] = useState(
    selectedTask ? new Date(selectedTask.taskEndTime) : daySelected.toDate()
  );

  const [taskDeadline, setTaskDeadline] = useState(
    selectedTask ? new Date(selectedTask.taskDeadline) : daySelected.toDate()
  );

  const [taskEst, setTaskEst] = useState(
    selectedTask ? new Date(selectedTask.taskEst) : daySelected.toDate()
  );

  const [taskDescription, setTaskDescription] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskColor, setTaskColor] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskRepeat, setTaskRepeat] = useState(
    selectedTask ? new Date(selectedTask.taskRepeat) : daySelected.toDate()
  );

  const [taskActualTime, setTaskActualTime] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskDone, setTaskDone] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskProgress, setTaskProgress] = useState(
    selectedTask ? selectedTask.taskType : "");




  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title: eventTitle,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      startTime: eventStartTime,
      endTime: eventEndTime,
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
      startTime: taskStartTime,
      endTime: taskEndTime,
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
            eventTitle={eventTitle}
            eventStartTime={eventStartTime}
            eventEndTime={eventEndTime}
            eventDescription={eventDescription}
            eventColor={eventColor}
            setEventTitle={setEventTitle}
            setEventStartTime={setEventStartTime}
            setEventEndTime={setEventEndTime}
            setEventDescription={setEventDescription}
            setEventColor={setEventColor}
          />
        ) : (
          <TaskForm
            taskTitle={taskTitle}
            taskType={taskType}
            taskStartTime={taskStartTime}
            taskEndTime={taskEndTime}
            taskDeadline={taskDeadline}
            taskEst={taskEst}
            taskDescription={taskDescription}
            taskColor={taskColor}
            taskRepeat={taskRepeat}

            setTaskTitle={setTaskTitle}
            setTaskType={setTaskType}
            setTaskStartTime={setTaskStartTime}
            setTaskEndTime={setTaskEndTime}
            setTaskDeadline={setTaskDeadline}
            setTaskEst={setTaskEst}
            setTaskDescription={setTaskDescription}
            setTaskColor={setTaskColor}
            setTaskRepeat={setTaskRepeat}

            daySelected={daySelected}
          />
        )}
      </div>
      <div>
        <AfterTask
          taskActualTime={taskActualTime}
          taskDone={taskDone}
          taskProgress={taskProgress}
        />
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
