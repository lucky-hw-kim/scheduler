import React from "react";
import 'components/Appointment/styles.scss'
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";


export default function Appointment (props){
  const formatTime = () => {
   return (
     (props.time) ? `Appointment at ${props.time}` : `No Appointments`
   )
  }
  return (
    <article className="appointment">{formatTime()}</article>
  )
}