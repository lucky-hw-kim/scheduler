import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
export default function InterviewerList(props) {

  console.log("VALUES", props.value);

  const interviewerList = props.interviewers.map((interviewer) => {
    // console.log("logging here:", interviewer.id, interviewer.name, props.value);

      return (
      
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        selected={interviewer.id === props.value}
        value={props.value}
        avatar={interviewer.avatar}
        setInterviewer={()=>{props.onChange(interviewer.id)}}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );
}
