import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        selected={interviewer.id === props.interviewer}
        avatar={interviewer.avatar}
        setInterviewer={()=>{props.setInterviewer(interviewer.id)}}
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
