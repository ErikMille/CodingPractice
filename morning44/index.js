const twoDigits = n => n < 10 ? '0' + n : '' + n;

const clockUpdate = (clock) => {
  const hoursDigits = document.querySelector('#digits-hours');
  const minutesDigits = document.querySelector('#digits-minutes');

  hoursDigits.textContent = twoDigits(clock.hours);
  minutesDigits.textContent = twoDigits(clock.minutes);
}


const  question =[];
const body = document.querySelector('body');
const questions = [
  {
    title: 'My title 1',
    body: 'Some interesting question',
  },
  {
    title: 'My title 2',
    body: 'Another question',
  },
  {
    title: 'My title 3',
    body: 'A really, really stupid question',
  },
  {
    title: 'My title',
    body: 'Like so',
  },
];


document.addEventListener('DOMContentLoaded', () => {
  let i=0;
  questions.forEach(element => {
    question[i]= new Question(element.title,element.body);
    question[i].mount(body);
    i++;
  });

  
  
});
