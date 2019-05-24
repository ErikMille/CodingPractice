let result=0;
let plus=0;

const input=document.querySelector('#num');
 

const update=()=>{
    const resultElm=document.querySelector('#res');
    resultElm.textContent=result;
    const opElm=document.querySelector('#op');
    switch (plus){
        case 1:
        opElm.textContent='+';
        break;
        case 2:
        opElm.textContent='-';
        break;
        case 3:
        opElm.textContent='*';
        break;
        case 4:
        opElm.textContent='/';
        break;
        case 0:
        opElm.textContent='';
    }
}

const B1=()=>{input.value+='1';}
const B2=()=>{input.value+='2';}
const B3=()=>{input.value+='3';}
const B4=()=>{input.value+='4';}
const B5=()=>{input.value+='5';}
const B6=()=>{input.value+='6';}
const B7=()=>{input.value+='7';}
const B8=()=>{input.value+='8';}
const B9=()=>{input.value+='9';}
const B0=()=>{input.value+='0';}


const sum = () =>{
    plus=1;update();
}

const minu = () =>{
    plus=2;update();
}
const mul=()=>{
    plus=3;update();
}
const div=()=>{
    plus=4;update();
}

const clea = () =>{
    console.log(result);
    result=0;
    update();
}
const backsp = () =>{
    input.value += '.';
}

const eq = () =>{
    
    const num=parseFloat(input.value);
    switch (plus){
        case 1:
        result+=num;
        break;
        case 2:
        result-=num;
        break;
        case 3:
        result*=num;
        break;
        case 4:
        result/=num;
        break;
        case 0:
        result=num;
    }
    plus=0;
    update();
    input.value=0;
}


document.addEventListener('DOMContentLoaded',

()=>{
    const btnPlus =document.querySelector('#plus');
    btnPlus.addEventListener('click',sum);
    
    const btnMin =document.querySelector('#minus');
    btnMin.addEventListener('click',minu);
    
    const btnMul =document.querySelector('#mul');
    btnMul.addEventListener('click',mul);
    
    const btnDiv =document.querySelector('#div');
    btnDiv.addEventListener('click',div);
    
    
    const btnEq =document.querySelector('#eq');
    btnEq.addEventListener('click',eq);
    
    
    const btnClear =document.querySelector('#clear');
    btnClear.addEventListener('click',clea);
    
    
    const btnBacksp =document.querySelector('#backsp');
    btnBacksp.addEventListener('click',backsp);

    const btnB1 =document.querySelector('#B1');
    btnB1.addEventListener('click',B1);
    const btnB2 =document.querySelector('#B2');
    btnB2.addEventListener('click',B2);
    const btnB3 =document.querySelector('#B3');
    btnB3.addEventListener('click',B3);
    const btnB4 =document.querySelector('#B4');
    btnB4.addEventListener('click',B4);
    const btnB5 =document.querySelector('#B5');
    btnB5.addEventListener('click',B5);
    const btnB6 =document.querySelector('#B6');
    btnB6.addEventListener('click',B6);
    const btnB7 =document.querySelector('#B7');
    btnB7.addEventListener('click',B7);
    const btnB8 =document.querySelector('#B8');
    btnB8.addEventListener('click',B8);
    const btnB9 =document.querySelector('#B9');
    btnB9.addEventListener('click',B9);
    const btnB0 =document.querySelector('#B0');
    btnB0.addEventListener('click',B0);

});


// document.getElementById("ree").innerHTML=age;
// document.getElementById("eer").innerHTML=str;
