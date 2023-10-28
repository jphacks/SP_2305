import React, { useReducer, useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const saveEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

const saveTasksReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  console.log(storageEvents);
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

const initTasks = () => {
  const storageTasks = localStorage.getItem("savedTasks");
  console.log(storageTasks);
  const parsedTasks = storageTasks ? JSON.parse(storageTasks) : [];
  return parsedTasks;
};


const ContextWrapper = (props) => {
  const [loginToken, setLoginToken] = useState();
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [weekStartDay, setWeekStartDay] = useState(dayjs());
  const [miniMonthIndex, setMiniMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [miniDaySelected, setMiniDaySelected] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    saveEventsReducer,
    [],
    initEvents
  );
  const [selectedTask, setSelectedTask] = useState(null);
  const [savedTasks, dispatchCalTask] = useReducer(
    saveTasksReducer,
    [],
    initTasks
  );

  const [showModalTabs, setShowModalTabs] = useState(false);
  const [activeTab, setActiveTab] = useState("event");
  
  useEffect(() => {
    // 以下構文でlocalStorageに保存
    // localStorage.setItem('key', 'value')
    if(loginToken)
      localStorage.setItem("loginToken", JSON.stringify(loginToken));
  }, [loginToken]);

  useEffect(() => {
    const storedData = localStorage.getItem('loginToken');
    if (storedData) {
      setLoginToken(storedData);
    }
  }, []);

  useEffect(() => {
    // 以下構文でlocalStorageに保存
    // localStorage.setItem('key', 'value')
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    // 以下構文でlocalStorageに保存
    // localStorage.setItem('key', 'value')
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  }, [savedTasks]);

  useEffect(() => {
    if (!showModalTabs || activeTab !== "event") {
      setSelectedEvent(null);
    }
  }, [showModalTabs, activeTab]);

  useEffect(() => {
    if (!showModalTabs || activeTab !== "task") {
      setSelectedTask(null);
    }
  }, [showModalTabs, activeTab]);

  useEffect(() => {
      setMonthIndex(miniMonthIndex);
      setWeekStartDay(miniDaySelected);
      setDaySelected(miniDaySelected);
  }, [miniDaySelected]);

  useEffect(() => {
      setMiniDaySelected(daySelected);
      setMiniMonthIndex(monthIndex);
  }, [monthIndex]);


  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        weekStartDay,
        setWeekStartDay,
        daySelected,
        setDaySelected,
        miniMonthIndex, 
        setMiniMonthIndex,
        miniDaySelected, 
        setMiniDaySelected,
        selectedEvent,
        setSelectedEvent,
        dispatchCalEvent,
        savedEvents,
        selectedTask,
        setSelectedTask,
        dispatchCalTask,
        savedTasks,
        showModalTabs,
        setShowModalTabs,
        activeTab,
        setActiveTab,
        loginToken,
        setLoginToken
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;