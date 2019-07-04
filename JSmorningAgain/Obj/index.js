const twoDigits = n => n < 10 ? '0' + n : '' + n;

const clockUpdate = (clock) => {
  const hoursDigits = document.querySelector('#digits-hours');
  const minutesDigits = document.querySelector('#digits-minutes');

  hoursDigits.textContent = twoDigits(clock.hours);
  minutesDigits.textContent = twoDigits(clock.minutes);
}


  

document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const clock = new Clock(
    today.getHours(),
    today.getMinutes()
  );
  const app = document.querySelector('body');
  clock.mount(app);
  
  
});
