import React from "react";

const GlobalContext = React.createContext({
  // calender関連
  monthIndex: 0,
  setMonthIndex: (index) => { },
  weekStartDay: null,
  setWeekStartDay: (index) => { },
  daySelected: null,
  setDaySelected: (day) => { },
  miniMonthIndex: 0,
  setMiniMonthIndex: (index) => { },
  miniDaySelected: null,
  setMiniDaySelected: (day) => { },
  // event関連
  dispatchCalEvent: ({ type, payload }) => { },
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => { },
  // task関連
  dispatchCalTask: ({ type, payload }) => { },
  savedTasks: [],
  selectedTask: null,
  setSelectedTask: () => { },
  ShowModalTabs: false,
  setShowModalTabs: () => { },
  activeTab: "event",
  setActiveTab: () => { },
  loginToken: "",
  setLoginToken: () => { },

  //sidebar
  ShowSideBar: true,
  setShowSideBar: () => { },
});

export default GlobalContext;