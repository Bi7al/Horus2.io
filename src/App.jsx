import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <>
      <div className="Custom-Grid">
        <div className='Side-Bar'>
          <SideBar />

        </div>
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App