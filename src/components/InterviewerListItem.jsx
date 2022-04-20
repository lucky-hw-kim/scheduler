import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  console.log(props);

  const showInterviewerName = function () {
    if(props.selected){
      return props.name
  }
}

  const interviewerClass = 
  classNames('interviewers__item',
  {
    'interviewers__item--selected' : props.selected

  })

  return (
    <li onClick={props.setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {showInterviewerName()}
    </li>
  );
}

