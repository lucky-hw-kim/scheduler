import React from "react";
import useApplicationData from "hooks/useApplicationData";
import DayList from "./DayList";
import Appointment from "./Appointment";
import './Application.scss'
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";


export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);
  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
  );

  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {},
  // });

//   const dailyAppointments = getAppointmentsForDay(state, state.day);
//   const dailyInterviewers = getInterviewersForDay(state, state.day);

//   const setDay = (day) => setState({ ...state, day });
//   // const setDays = (days) => setState(prev => ({ ...prev, days }));
//   // setState({ ...state, day: "Tuesday" });

//   useEffect(() => {
//     Promise.all([
//       axios.get("/api/days"),
//       axios.get("/api/appointments"),
//       axios.get("/api/interviewers"),
//     ]).then((all) => {
//       setState((prev) => ({
//         ...prev,
//         days: all[0].data,
//         appointments: all[1].data,
//         interviewers: all[2].data,
//       }));
//     });
//   }, []);



//   function bookInterview(id, interview) {
//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };
//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     return(
//     axios.put(`/api/appointments/${id}`, {...appointment})
//     .then( setState({ ...state, appointments })
//     ))
//   }

// function cancelInterview(id) {

//   return(
//     axios.delete(`/api/appointments/${id}`)
//     .then(setState((prev)=>({...prev}))
//     )
//   )
// }

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
