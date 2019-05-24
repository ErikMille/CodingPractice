
// class ProgressBar{
//   constructor(value,max){
//     this.value=value;
//     this.max=max;
//   }
// }

// const bat = new ProgressBar(5,100);



// document.addEventListener('DOMContentLoaded', () => {


//   const count=document.querySelector('#counter');
//   const bar=document.querySelector('#knob');
//   const plus=document.querySelector('#plus');
//   const minus=document.querySelector('#minus');
//   const maximum=document.querySelector('#maximum');
//   const max=bat.max;
//   let val=bat.value;
//   maximum.textContent=max;
// const update=()=>{
//   if (val>max){val=max;};
//   if (val<0){val=0;}
//   count.textContent=val;
//   bar.style.width=`${val*(100/max)}%`;
//   }

//   update();

//   plus.addEventListener('click',() =>{
//     val++;
//     update();
//   });

//   minus.addEventListener('click',() =>{
//     val--;
//     update();
//   });
// });


class ProgressBar{
  constructor(value,max){
    this.value=value;
    this.max=max;
  }
  


}

const bat = new ProgressBar(5,100);



document.addEventListener('DOMContentLoaded', () => {


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