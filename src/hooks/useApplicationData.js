import axios from "axios";
// import "components/Application.scss";
import { useEffect, useReducer } from "react";



const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

const useApplicationData = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case SET_DAY: {
        return { ...state, day: action.day };
      }
      case SET_APPLICATION_DATA: {
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers,
        };
      }
      case SET_INTERVIEW: {
        const setSpots = (state, day) => {
          return state.days
            .find((stateDay) => stateDay.name === day)
            .appointments.reduce((totalSpots, appointmentsNum) => {
              return state.appointments[appointmentsNum].interview
                ? totalSpots
                : totalSpots + 1;
            }, 0);
        };

        const updatedState = {
          ...state,
          appointments: {
            ...state.appointments,
            [action.id]: {
              ...state.appointments[action.id],
              interview: action.interview,
            },
          },
        };
  
        return {
          ...updatedState,
          days: state.days.map((day) => {
            return {
              ...day,
              spots: setSpots(updatedState, day.name),
            };
          }),
        };
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  };

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
