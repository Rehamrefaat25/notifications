import React from 'react'
import "./Allnotifications.css"

function Allnotifications(props) {
  return (
    <div className='notif'>
    <div className='icon'>
        <img src={props.icon}></img>
        </div>
        <div>
        <label className='user'>{props.username}</label>
        <span className='action'>{props.action}</span>
        <span className='details'>{props.details}</span>
        <img  className="picture"src={props.picture}></img>
        <span className='time'>{props.time}</span>
        <p className={props.message?"message":null}>{props.message}</p>
        <span className={props.isread==false?"read":null}></span>
        </div>
    </div>
  )
}

export default Allnotifications