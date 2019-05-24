const circus = (radius)=>{
    return Math.PI*radius**2/2
};
const salary = () =>{
    const payh=document.querySelector('#pay');
    const pay=payh.value;
    const hours=document.querySelector('#hours');
    const hour=hours.value;
    const days=document.querySelector('#days');
    const day=days.value;

    const sal=document.querySelector('#sal');
    sal.textContent=pay*hour*day;
}
const tax = ()=>{
    const mone=document.querySelector('#sal');
    const per=document.querySelector('#per');
    const mon=mone.textContent;
    const pe=per.value;

    const tax=document.querySelector('#tax');
    tax.textContent=mon*(1-pe/100);
}

const greet=()=>{
    const input=document.querySelector('#name');
    const name=input.value;
    input.className='bg-red';
    const head=document.querySelector('h1');
    head.textContent='hello'+name;
    head.style.color='orange';
}






// age=prompt('nomber');
// let age = document.getElementById("reee").value;
// document.getElementById("ree").innerHTML=age;
// document.getElementById("eer").innerHTML=str;
// alert(circus(age));


const head=document.querySelector('h1')

head.textContent='hello'