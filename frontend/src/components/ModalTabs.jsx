import React, { useState, useContext, useEffect } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import { CheckIcon } from '@chakra-ui/icons'
import GlobalContext from "../context/GlobalContext";
import EventForm from "./EventForm";
import TaskForm from "./TaskForm";
import AfterTask from "./AfterTask";
import dayjs from "dayjs";



export const ModalTabs = () => {
  const { daySelected, dispatchCalEvent, dispatchCalTask, selectedEvent, selectedTask, setShowModalTabs, activeTab, setActiveTab, taskActualTime, taskDone, taskProgress, setTaskDone, setTaskProgress, setShowAfterTaskModal } =
    useContext(GlobalContext);

  const [eventTitle, setEventTitle] = useState(
    selectedEvent ? selectedEvent.title : "");

  const [eventStartTime, setEventStartTime] = useState(
    selectedEvent ? dayjs(selectedEvent.startTime).toDate() : (daySelected ? daySelected.toDate() : dayjs().toDate())
  );

  const [eventEndTime, setEventEndTime] = useState(
    selectedEvent ? dayjs(selectedEvent.endTime).toDate() : (daySelected ? daySelected.toDate() : dayjs().toDate())
  );

  const [eventDescription, setEventDescription] = useState(
    selectedEvent ? selectedEvent.description : "");

  const [eventColor, setEventColor] = useState(
    selectedEvent ? selectedEvent.color : "bg-neutral-200");

  // task関連
  const [taskTitle, setTaskTitle] = useState(
    selectedTask ? selectedTask.title : "");

  const [taskType, setTaskType] = useState(
    selectedTask ? selectedTask.taskType : "deadLineTrue");

  const [taskStartTime, setTaskStartTime] = useState(
    selectedTask ? dayjs(selectedTask.taskStartTime).toDate() : daySelected.toDate()
  );

  const [taskEndTime, setTaskEndTime] = useState(
    selectedTask ? dayjs(selectedTask.taskEndTime).toDate() : daySelected.toDate()
  );

  const [taskDeadline, setTaskDeadline] = useState(
    selectedTask ? dayjs(selectedTask.deadline).toDate() : daySelected.toDate()
  );

  const [taskEstNumber, setTaskEstNumber] = useState(
    selectedTask ? selectedTask.taskEstNumber : 1
  );

  const [taskEstUnit, setTaskEstUnit] = useState(selectedTask ? selectedTask.taskEstUnit : "hour");


  const [taskEst, setTaskEst] = useState(
    selectedTask && selectedTask.taskEst ? selectedTask.taskEst : 60
  );

  const [forNumber, setForNumber] = useState(
    selectedTask ? selectedTask.forNumber : 1
  );

  const [frequencyUnit, setFrequencyUnit] = useState(
    selectedTask ? selectedTask.frequencyUnitr : "week"
  );

  useEffect(() => {
    if (taskEstUnit === "minute") {
      setTaskEst(taskEstNumber);
    } else if (taskEstUnit === "hour") {
      setTaskEst(taskEstNumber * 60);
    } else if (taskEstUnit === "day") {
      setTaskEst(taskEstNumber * 3600);
    }
  }, [taskEstNumber, taskEstUnit]);

  const [taskDescription, setTaskDescription] = useState(
    selectedTask ? selectedTask.taskType : "");

  const [taskColor, setTaskColor] = useState(
    selectedTask ? selectedTask.color : "");

  const [taskRepeat, setTaskRepeat] = useState(
    selectedTask ? selectedTask.repeat : 1
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title: eventTitle,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      startTime: eventStartTime,
      endTime: eventEndTime,
      description: eventDescription,
      color: eventColor
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
      taskType: taskType,
      startTime: taskStartTime,
      endTime: taskEndTime,
      deadLine: taskDeadline,
      taskEstNumber: taskEstNumber,
      taskEstUnit: taskEstUnit,
      taskEst: taskEst,
      forNumber: forNumber,
      frequencyUnit: frequencyUnit,
      repeat: taskRepeat,
      description: eventDescription,
      color: taskColor,
      taskActualTime: taskActualTime,
      taskDone: taskDone,
      taskProgress: taskProgress,
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

  const handleCheckTask = (tsk) => {
    setTaskDone(true);
    setTaskProgress(tsk.taskProgress + 1);
    setShowAfterTaskModal(true);
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


    <form className="bg-white rounded-lg shadow-2xl w-1/4 fixed left-0 top-0" onSubmit={handleSubmit}>
      <header className="bg-gray-100 px-4 py-2 flex justify-end">
        <div className="text-gray-400">
          {selectedEvent !== null && activeTab === "event" && (
            <button onClick={handleDeleteEvent}>
              <MdDeleteForever />
            </button>
          )}
          {selectedTask !== null && activeTab === "task" && (
            <>
              <button onClick={() => handleCheckTask(selectedTask)}>
                <CheckIcon />
              </button>
              <button onClick={handleDeleteTask}>
                <MdDeleteForever />
              </button>
            </>
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
              予定
            </button>
          }
          {selectedEvent === null &&
            <button
              className={`${activeTab === "task" ? "text-blue-500" : "text-gray-500"
                }`}
              onClick={() => handleTabChange("task")}
            >
              タスク
            </button>
          }
        </div>
        {activeTab === "event" ? (
          <EventForm
            // daySelected={daySelected}
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
            taskEstNumber={taskEstNumber}
            taskEstUnit={taskEstUnit}
            forNumber={forNumber}
            frequencyUnit={frequencyUnit}
            taskDescription={taskDescription}
            taskColor={taskColor}
            taskRepeat={taskRepeat}

            setTaskTitle={setTaskTitle}
            setTaskType={setTaskType}
            setTaskStartTime={setTaskStartTime}
            setTaskEndTime={setTaskEndTime}
            setTaskDeadline={setTaskDeadline}
            setTaskEstNumber={setTaskEstNumber}
            setTaskEstUnit={setTaskEstUnit}
            setForNumber={setForNumber}
            setFrequencyUnit={setFrequencyUnit}
            setTaskDescription={setTaskDescription}
            setTaskColor={setTaskColor}
            setTaskRepeat={setTaskRepeat}

          // daySelected={daySelected}
          />
        )}
      </div>
      <div>
      </div>
      <footer className="flex justify-end border-t p-3 mt-5">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
        >
          決定
        </button>
      </footer>
    </form>
  );
};
