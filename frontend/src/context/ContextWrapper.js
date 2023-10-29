import React, { useReducer, useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { apiClient } from "../utils/apiClient";
import {jwtDecode} from 'jwt-decode'
var USER_INFO = undefined
var JWT_TOKEN = ""
const constructAuthHeader = (token: string): { Authorization: string } => ({
  Authorization: `Bearer ${token}`,
})

const saveEventsReducer = async (state, { type, payload }) => {
  const astate = await state
  switch (type) {
    case "push":
      payload['userId'] = USER_INFO.uuid;
      payload['id'] = "";
      apiClient.schedule.$post({ body: payload, headers: constructAuthHeader(JWT_TOKEN)})
        .catch(() => {
        throw new Error('Invalid credential')
        })
      return [...astate, payload];
      
      
    case "update":
      payload['userId'] = USER_INFO.uuid;
      apiClient.schedule._scheduleId(payload["id"]).$patch({ body: payload, headers: constructAuthHeader(JWT_TOKEN)})
        .catch(() => {
        throw new Error('Invalid credential')
        })
      return astate.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return astate.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

const saveTasksReducer = async (state, { type, payload }) => {
  const astate = await state
  switch (type) {
    case "push":
      payload['userId'] = USER_INFO.uuid;
      payload['id'] = "";
      apiClient.task.$post({ body: payload, headers: constructAuthHeader(JWT_TOKEN)})
        .catch(() => {
        throw new Error('Invalid credential')
        })
      return [...astate, payload];
      
      
    case "update":
      payload['userId'] = USER_INFO.uuid;
      apiClient.task._taskId(payload["id"]).$patch({ body: payload, headers: constructAuthHeader(JWT_TOKEN)})
        .catch(() => {
        throw new Error('Invalid credential')
        })
      return astate.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return astate.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

// const saveEventsReducer = (state, { type, payload }) => {
//   switch (type) {
//     case "push":
//       return [...state, payload];
//     case "update":
//       return state.map((evt) => (evt.id === payload.id ? payload : evt));
//     case "delete":
//       return state.filter((evt) => evt.id !== payload.id);
//     default:
//       throw new Error();
//   }
// };

// const saveTasksReducer = async (state, { type, payload }) => {
//   switch (type) {
//     case "push":
//       return [...state, payload];
//     case "update":
//       return state.map((evt) => (evt.id === payload.id ? payload : evt));
//     case "delete":
//       return state.filter((evt) => evt.id !== payload.id);
//     default:
//       throw new Error();
//   }
// };

const initEvents = async () => {
  const storedData = localStorage.getItem('loginToken');
  if (storedData) {
    JWT_TOKEN = JSON.parse(storedData);
    USER_INFO  = jwtDecode(JWT_TOKEN);
  }
  if(USER_INFO)
  {
    const webEvents = async () => {
      return await apiClient.user._userId(USER_INFO.uuid).schedules.$get({ headers: constructAuthHeader(JWT_TOKEN)})
      .catch(() => {
      throw new Error('Invalid credential')
      });
    }
    return webEvents();
    }
  else
  {
    const storageEvents = localStorage.getItem("savedEvents");
    console.log(storageEvents);
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
  }

};

const initTasks = async () => {
  const storedData = localStorage.getItem('loginToken');
  if (storedData) {
    JWT_TOKEN = JSON.parse(storedData);
    USER_INFO  = jwtDecode(JWT_TOKEN);
  }
  if(USER_INFO)
  {
    const webTasks = async () => {
      return await apiClient.user._userId(USER_INFO.uuid).tasks.$get({ headers: constructAuthHeader(JWT_TOKEN)})
      .catch(() => {
      throw new Error('Invalid credential')
      });
    }
    return webTasks();
    }
  else
  {
    const storageTasks = localStorage.getItem("savedTasks");
    console.log(storageTasks);
    const parsedTasks = storageTasks ? JSON.parse(storageTasks) : [];
    return parsedTasks;
  }

};

// const initTasks = () => {
//   const storageTasks = localStorage.getItem("savedTasks");
//   console.log(storageTasks);
//   const parsedTasks = storageTasks ? JSON.parse(storageTasks) : [];
//   return parsedTasks;
// };


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
    const storedData = localStorage.getItem('loginToken');
    if (storedData) {
      JWT_TOKEN = JSON.parse(storedData);
      USER_INFO  = jwtDecode(JWT_TOKEN);
      setLoginToken(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    // 以下構文でlocalStorageに保存
    // localStorage.setItem('key', 'value')
    if(loginToken)
    {
      localStorage.setItem("loginToken", JSON.stringify(loginToken));
      JWT_TOKEN = loginToken;
      USER_INFO  = jwtDecode(loginToken);
      console.log(loginToken);
    }
      
    
  }, [loginToken]);



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