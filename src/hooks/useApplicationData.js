import axios from "axios";
// import "components/Application.scss";
import { useEffect, useReducer } from "react";

import reducer, {
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW,
} from 'reducers/application';


const useApplicationData = () => {

  // Reducer Hook
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => dispatch({ type: SET_DAY, day: day });

  // WebSocket Config

  const schedularWS = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
  schedularWS.onopen = function () {
    schedularWS.send('ping');
  };

  schedularWS.onmessage = (event) => {
    const appointmentData = JSON.parse(event.data);
    if (appointmentData.type === 'SET_INTERVIEW') {
      dispatch({
        type: SET_INTERVIEW,
        id: appointmentData.id,
        interview: appointmentData.interview,
      });
    }
  };

  // import data and update state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      const [days, appointments, interviewers] = all;
      dispatch({
        type: SET_APPLICATION_DATA,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      });
    });
  }, []);

// Send interview appointment to database

  function bookInterview(id, interview) {
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview })
      })
  }

// Delete appointment from database

  function cancelInterview(id) {
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview: null });
      })
  }
  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
