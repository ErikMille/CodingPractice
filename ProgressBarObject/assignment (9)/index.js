// document.addEventListener('DOMContentLoaded', () => {
//   console.log('It works');

//   const count=document.querySelector('#counter');
//   const bar=document.querySelector('#knob');
//   const plus=document.querySelector('#plus');
//   const minus=document.querySelector('#minus');
//   let val=count.textContent;

//   plus.addEventListener('click',() =>{
//     val++;
//     if (val>10){val=10;};
//     count.textContent=val;
//     bar.style.width=`${val}0%`
//   });

//   minus.addEventListener('click',() =>{
//     val--;
//     if (val<0){ val=0;};
//     count.textContent=val;
//     bar.style.width=`${val}0%`
    
//   });
// });

class ProgressBar{
  constructor(value,max){
    this.value=value;
    this.max=max;
  }
  render(){
    this.element=document.createElement('div');
    this.element.innerHTML=(
      `<div id="label" class="label">
        <span id="counter">${this.value}</span>/<span id="maximum">${this.max}</span>
        </div>
        <div class="progress">
          <div id="minus" class="btn-minus"></div>
          <div class="bar">
          <div id="knob" class="knob"></div>
          </div>
          <div id="plus" class="btn-plus"></div>
      </div>`              
    );
    return this.element; 
  }
  mount(parent){
    parent.appendChild(this.render());
  }
}

const bat = new ProgressBar(6,100);



document.addEventListener('DOMContentLoaded', () => {
  const parent=document.querySelector('#cou');
  // parent.appendChild(bat.render());
  bat.mount(parent);
  const count=document.querySelector('#counter');
  const bar=document.querySelector('#knob');
  const plus=document.querySelector('#plus');
  const minus=document.querySelector('#minus');
  const maximum=document.querySelector('#maximum');
  const max=bat.max;
  let val=bat.value;
  maximum.textContent=max;
const update=()=>{
  if (val>max){val=max;};
  if (val<0){val=0;}
  count.textContent=val;
  bar.style.width=`${val*(100/max)}%`;
  }

  update();

  plus.addEventListener('click',() =>{
    val++;
    update();
  });

  minus.addEventListener('click',() =>{
    val--;
    update();
  });
});