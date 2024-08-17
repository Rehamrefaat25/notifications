import React from 'react'
import './Notifications.css'
import mark from '/assets/Images/mark.webp'
import angela from '/assets/Images/angela.webp'
import jacob from '/assets/Images/jacob.webp'
import anna from '/assets/Images/anna.webp'
import rizky from '/assets/Images/rizky.webp'
import kimberly from '/assets/Images/kimberly.webp'
import chess from '/assets/Images/chess.webp'
import nathan from '/assets/Images/nathan.webp'
import { useState } from 'react'


import Allnotifications from '../Allnotifications/Allnotifications'

function Notifications() {
    const Arrayofobjects=[
        {id:1,
             icon:mark ,
             username:"Mark Webber" ,
             action:"react to your recent post" ,
             details:"My first tournament today",
             time:"1m ago",
             message:"",
             isread:false,},
        {id:2,
         icon:angela ,
         username:"Angela Gray" ,
         action:"Followed you",
         details:"",
         time:"5m ago",
        isread:false},
        {id:3,
         icon:jacob ,
         username:"Jacob Thompson" ,
         action:"has joined your group" ,
         details:"Chess Club",
         time:"1day ago",
         isread:false,},
   {id:4,
   icon:rizky,
   username:"Rizky Hasanuddin",
   action:"send you aprivite message",
   details:"",
   message:"Hello, thanks for setting up the chess club i have been amember for  afew weeks now and i am already having lots of fun and improving my game.",
   time:"5 days ago",
    isread:true,
   },
   {id:5,
    icon:kimberly,
    username:"Kimberly Smith",
    action:"comment on your picture",
   details:"",
    picture:chess,
    time:"1 week ago",
    isread:true,
   },
   {id:6,
    icon:nathan,
    username:"Nathan peterson",
    action:"react to your recent post ",
    details:"5-end game strategies to increase your win rate ",
    time:"2weeks ago",
    isread:true,
   },
   {
    id:7,
    icon:anna,
    username:"Anna Kim",
    action:"left the group ",
    details:"chess club",
    time:"2weeks ago",
    isread:true,
   }

    ];

  return (
    <div className='notifiwrapper'>
       {Arrayofobjects.map((item)=>{
        return(
        <Allnotifications
      key={item.id}
      icon={item.icon}
      username={item.username}
      action={item.action}
      details={item.details}
      time={item.time}
      message={item.message}
      picture={item.picture}
      isread={item.isread}
             >
        </Allnotifications>);

 } )}
    </div>
  )
}

export default Notifications