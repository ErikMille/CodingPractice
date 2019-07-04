const clockUpdate = (clock) => {
  let hoursDigits = document.querySelector('#digits-hours');
  let minutesDigits = document.querySelector('#digits-minutes');
  let ampm = document.querySelector('#ampm');
  switch(clock.minutes){
    case -1:
    clock.minutes=59
    clock.hours--
    break
    case 60:
    clock.minutes=1
    clock.hours++
    break
  }
  switch(clock.hours){
    case 0:
    clock.hours=12
    break
    case 13:
    clock.hours=1
    break
  }
  ampm.innerHTML=clock.ampm;
  hoursDigits.innerHTML = clock.hours;
  minutesDigits.innerHTML = clock.minutes;
}

document.addEventListener('DOMContentLoaded', () => {
  let clock = {
    hours: 12,
    minutes: 59,
    ampm: 'AM'
  }

  clockUpdate(clock);
  
  let btnHoursUp = document.querySelector('#btn-hours-up');
  btnHoursUp.addEventListener('click', () => {
    clock.hours++;
    clockUpdate(clock);
  });
  let btnHoursDown = document.querySelector('#btn-hours-down');
  btnHoursDown.addEventListener('click', () => {
    clock.hours--;
    clockUpdate(clock);
  });
  let btnMinutesUp = document.querySelector('#btn-minutes-up');
  btnMinutesUp.addEventListener('click', () => {
    clock.minutes++;
    
    clockUpdate(clock);
  });
  let btnMinutesDown = document.querySelector('#btn-minutes-down');
  btnMinutesDown.addEventListener('click', () => {
    clock.minutes--;
    clockUpdate(clock);
  });
  let btnAMPM = document.querySelector('#ampmbtn');
  btnAMPM.addEventListener('click', () => {
    if (clock.ampm=='AM'){clock.ampm='PM'}else{clock.ampm='AM'}
    clockUpdate(clock);
  });
});
