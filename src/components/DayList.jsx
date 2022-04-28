import React from "react";
import DayListItem from "./DayListItem";

// Render list of days Monday to Friday from DayListItem

export default function DayList(props) {
  const listItems = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });
  return <ul>{listItems}</ul>;
}
