import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import { useVisualMode } from "hooks/useVisualMode";
import Form from "./Form";
// import Status from "./Status";
// import Error from "./Error";
// import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY)
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => {
        console.log('Clicked on Add')
        return transition(CREATE) 
      }} />}
      {mode === SHOW && (
        <Show 
        interviewer={props.interview.interviewer}
        student={props.interview.student}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onSave={props.onSave} 
        onCancel={() => {return back()}} 
        />
      )}
   

    </article>
  );
}

// const formatTime = () => {
//   return props.time ? `Appointment at ${props.time}` : `No Appointments`;
//   {
//     formatTime();
//   }
// };

      
      /* {props.interview ? (
        <Show
          interview={props.interview}
          student={props.interview.student}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ) : (
        <Empty />
      )} */
