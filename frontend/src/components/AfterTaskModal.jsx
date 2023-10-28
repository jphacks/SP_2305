import React, { useState, useContext, useEffect } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";
import AfterTask from "./AfterTask";
import dayjs from "dayjs";



export const AfterTaskModal = () => {
  const { daySelected, dispatchCalEvent, dispatchCalTask, selectedEvent, selectedTask, setShowModalTabs,setShowAfterTaskModal,  activeTab, setActiveTab, setTaskActualTime} =
    useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    console.log("A");
    setShowAfterTaskModal(false);
  };

  return (


    <form className="bg-white rounded-lg shadow-2xl w-1/4 fixed left-0 top-0" onSubmit={handleSubmit}>
      <header className="bg-gray-100 px-4 py-2 flex justify-end">
        <div className="text-gray-400">
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </div>
      </header>
      <div>
        <AfterTask/>
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
