
const bb1=()=>{
    const head=document.querySelector('.b1');
    head.style.display='none';
}
const bb2=()=>{
    const head=document.querySelector('.b2');
    head.style.display='none';
}
const bb3=()=>{
    const head=document.querySelector('.b3');
    head.style.display='none';
}
const bb4=()=>{
    const head=document.querySelector('.b4');
    head.style.display='none';
}
const bb5=()=>{
    const head=document.querySelector('.b5');
    head.style.display='none';
}
const bb6=()=>{
    const head=document.querySelector('.b6');
    head.style.display='none';
}

const b1=()=>{
    const head=document.querySelector('.b1');
    head.style.display='block';
    bb2();bb3();bb4();bb5();bb6();
}
const b2=()=>{
    const head=document.querySelector('.b2');
    head.style.display='block';
    bb1();bb3();bb4();bb5();bb6();
}

const b3=()=>{
    const head=document.querySelector('.b3');
    head.style.display='block';
    bb2();bb1();bb4();bb5();bb6();
}
const b4=()=>{
    const head=document.querySelector('.b4');
    head.style.display='block';
    bb2();bb3();bb1();bb5();bb6();
}
const b5=()=>{
    const head=document.querySelector('.b5');
    head.style.display='block';
    bb2();bb3();bb4();bb1();bb6();
}
const b6=()=>{
    const head=document.querySelector('.b6');
    head.style.display='block';
    bb2();bb3();bb4();bb5();bb1();
}



const eq = () =>{
    
    const plus=Math.floor(Math.random() * 6+1);
    console.log(plus);
    switch (plus){
        case 1:
        b1();
        break;
        case 2:
        b2();
        break;
        case 3:
        b3();
        break;
        case 4:
        b4();
        break;
        case 5:
        b5();
        break;
        case 6:
        b6();
        
    }
}


document.addEventListener('DOMContentLoaded',

()=>{        
    const btnEq=document.querySelector('#eq');
    btnEq.addEventListener('click',eq);
       

});


// document.getElementById("ree").innerHTML=age;
// document.getElementById("eer").innerHTML=str;
