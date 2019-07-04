class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  incHours() {
    if (this.hours === 11) {
      this.hours = 0;
    } else {
      this.hours++;
    }
  }

  decHours() {
    if (this.hours === 0) {
      this.hours = 11;
    } else {
      this.hours--;
    }
  }

  incMinutes() {
    if (this.minutes === 59) {
      this.minutes = 0;
      this.incHours();
    } else {
      this.minutes++;
    }
  }

  decMinutes() {
    if (this.minutes === 0) {
      this.minutes = 59;
      this.decHours();
    } else {
      this.minutes--;
    }
  }
  render(){
      this.element=document.createElement('div');
      this.element.className="clock";
      this.element.innerHTML=(`<div class="control">
      <button id="btn-hours-up" class="digit-btn">+</button>
      <div id="digits-hours" class="digits hours">XX</div>
      <button id="btn-hours-down" class="digit-btn">-</button>
    </div>
    <div class="separator">:</div>
    <div class="control">
      <button id="btn-minutes-up" class="digit-btn">+</button>
      <div id="digits-minutes" class="digits minutes">XX</div>
      <button id="btn-minutes-down" class="digit-btn">-</button>
    </div>`);
    this.element.querySelector('#btn-hours-up').addEventListener(
      'click', 
      () => {
        this.incHours();
        this.update();
      }
    );
  
    this.element.querySelector('#btn-hours-down').addEventListener(
      'click', 
      () => {
        this.decHours();
        this.update();
      }
    );
  
    this.element.querySelector('#btn-minutes-up').addEventListener(
      'click', 
      () => {
        this.incMinutes();
        this.update();
      }
    );
  
    this.element.querySelector('#btn-minutes-down').addEventListener(
      'click', 
      () => {
        this.decMinutes();
        this.update();
      }
    );
    this.minutesDigits=this.element.querySelector('#digits-minutes');
    this.hoursDigits=this.element.querySelector('#digits-hours');
  }
  mount(parent){
    this.render();
    parent.appendChild(this.element);
    this.update();

  }
  update(){
    this.hoursDigits.textContent = twoDigits(this.hours);
    this.minutesDigits.textContent = twoDigits(this.minutes);
  }
}
