import axios from "axios";
// import "components/Application.scss";
import { useEffect, useReducer } from "react";

import reducer, {
  SET_APPLICATION_DATA,
  SET_DAY,
  SET_INTERVIEW,
} from 'reducers/application';


const useApplicationData = () => {

  // useEffect to get tdata from the api HEROKU
    const daysURL = "https://lucky-scheduler.herokuapp.com/api/days"
    const appointmentsURL = "https://lucky-scheduler.herokuapp.com/api/appointments"
    const  interviewersURL = "https://lucky-scheduler.herokuapp.com/api/interviewers"



    /* Working on Stretch work */
    // const schedularWS = new WebSocket('ws://localhost:8001');
    // schedularWS.onopen = function () {
    //   schedularWS.send('Ping');
    // };

    // schedularWS.onmessage = (event) => {
    //   const appointmentData = JSON.parse(event.data);
    //   if (appointmentData.type === 'SET_INTERVIEW') {
    //     dispatch({
    //       type: SET_INTERVIEW,
    //       id: appointmentData.id,
    //       interview: appointmentData.interview,
    //     });
    //   }
    // };


  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => dispatch({ type: SET_DAY, day: day });


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


  function bookInterview(id, interview) {
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview })
      })
  }

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
