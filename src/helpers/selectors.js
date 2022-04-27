export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter((d) => {
    if (!d.name) {
      return [];
    }
    return d.name === day;
  });
  if (filteredDay.length < 1) {
    return [];
  } else {
    const appArr = [];
    for (let app of filteredDay[0].appointments) {
      appArr.push(state.appointments[app]);
    }
    return appArr;
  }
}

export function getInterview(state, interview) {
  if (!interview) {
    return interview;
  }
  const appointmentArr = Object.values(state.appointments);
  const filterInterview = appointmentArr.filter((app) => {
    if (app.interview != null) {
      if (app.interview.interviewer == interview.interviewer) {
        return (app.interview.interviewer = {
          ...state.interviewers[interview.interviewer],
        });
      }
    }
  });
  return filterInterview[0].interview;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter((d) => {
    if (!d.name) {
      return [];
    }
    return d.name === day;
  });
  if (filteredDay.length < 1) {
    return [];
  } else {
    const interviewerArr = [];
    for (let id of filteredDay[0].interviewers) {
      interviewerArr.push(state.interviewers[id]);
    }
    return interviewerArr;
  }
}
