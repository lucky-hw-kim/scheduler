import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

// Shows spot remaining for each day and each day name

export default function DayListItem(props) {
  const formatSpots = function () {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    } else {
      return `${props.spots} spots remaining`;
    }
  };
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"> {formatSpots()}</h3>
    </li>
  );
}
