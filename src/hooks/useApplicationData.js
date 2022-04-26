import axios from "axios";
// import "components/Application.scss";
import { useState, useEffect } from "react";

const useApplicationData = () => {
  // State container
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Set default day
  const setDay = (day) => setState({ ...state, day });

  // improt data and update state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);


// Update Spots functions

  function addSpots (id) {
    state.days.map((day)=>{    
      if(day.appointments.includes(id)){
        return day.spots += 1;
      }
    })
  }

  function removeSpots (id) {
    state.days.map((day)=>{    
      if(day.appointments.includes(id)){
        return day.spots -= 1;
      }
    })
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { ...appointment })
      .then(setState({ ...state, appointments }))
      .then(removeSpots(id))
  }

  function cancelInterview(id) {
    return axios
      .delete(`/api/appointments/${id}`)
      .then(setState((prev) => ({ ...prev })))
      .then(addSpots(id))
  }
  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
