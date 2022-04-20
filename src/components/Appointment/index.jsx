import React from "react";
import 'components/Appointment/styles.scss'

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