// Get appointments for each days

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

// Get interview object joined with interviewer object

export function getInterview(state, interview) {
  if (!interview) return interview;

  const filteredInterview = {
    student: interview.student,
  };

  filteredInterview.interviewer = state.interviewers[interview.interviewer];
  return filteredInterview;
}

// Get different interviwers for each day

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
