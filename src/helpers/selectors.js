export function getAppointmentsForDay(state, day) {

  const filteredDay = state.days.filter((d) =>{
    if(!d.name) {
      return []
    }
    return d.name === day
    }
  )
  if(filteredDay.length < 1) {
    return []
  } else {
    const appArr = []
    for(let app of filteredDay[0].appointments ) {
      appArr.push(state.appointments[app])
    }
    return appArr
  }
}


  

