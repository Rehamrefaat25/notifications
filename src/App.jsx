import './App.css'
import Notifications from './Components/Notifications/Notifications'
// import { useState } from 'react'
function App() {

  return (
    <main>
      <div className='title'>
      <button className="notifibtn"
          >Notifications</button>
      <button className="readbtn"
      >Mark all as read</button>
      </div>
      <Notifications></Notifications>
    </main>
    
  )
}

export default App
