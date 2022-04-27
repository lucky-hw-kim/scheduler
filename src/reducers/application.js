
const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
  
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

export default reducer
export {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
}