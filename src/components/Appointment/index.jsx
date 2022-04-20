import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const formatTime = () => {
    return props.time ? `Appointment at ${props.time}` : `No Appointments`;
    {
      formatTime();
    }
  };
  return (
    <article className="appointment">
      <Header time={props.time} />

      {props.interview ? (
        <Show onEdit={props.onEdit} onDelete={props.onDelete} />
      ) : (
        <Empty />
      )}
    </article>
  );
}
