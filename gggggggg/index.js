


class Chip{
    constructor(elem,y,x){
        this.elem=elem;
        this.value=Math.floor((Math.random()*5+1));
        this.y=y;
        this.x=x;
    }
    col=function(){
        switch (this.value) {
            case 1:
                return('yellow');
            case 2:
                return('grey');
            case 3:
                return('blue');
            case 4:
                return('green');
            case 5:
                return('red');
          }
    }
}

class Game{
    constructor(score,chips){
        this.score=score;
        this.chips=chips;
    }
    addChip=(x,y)=>{
        const r1=new Chip(document.createElement('div'),x,y);
        r1.elem.className='chips'
        r1.elem.innerHTML=`${r1.value}`;
        r1.elem.style=`top:${r1.y}rem; left:${r1.x}rem; background-color:${r1.col()}`;
        container.appendChild(r1.elem);
        r1.elem.addEventListener('click',
            ()=>{        
            r1.elem.remove();
            sum.textContent=parseInt(r1.value)+parseInt(sum.innerHTML);          
        });
    }
}

const create=()=>{
    const r1=new Chip(document.createElement('div'),Math.floor((Math.random()*40+10)),Math.floor((Math.random()*40+10)));
    r1.elem.className='chips'
    r1.elem.innerHTML=`${r1.value}`;
    r1.elem.style=`top:${r1.y}rem; left:${r1.x}rem; background-color:${r1.col()}`;
    container.appendChild(r1.elem);
    r1.elem.addEventListener('click',
        ()=>{        
        r1.elem.remove();
        sum.textContent=parseInt(r1.value)+parseInt(sum.innerHTML);          
    });
}

    const container=document.querySelector('#container');
    const sum=document.querySelector('#sum');

    document.addEventListener('DOMContentLoaded',
    ()=>{     
        const btn=document.querySelector('#btn');
        btn.addEventListener('click',()=>{
            create();   
        });  
        
        
    });








    // like[i] = document.createElement('div');
    // like[i].className = 'pic';
    // like[i].innerHTML = `<button id="butn${i}" class="butn">0</button>`;
    // console.log(like[i]);
    // like[i].addEventListener('click',
    //     () =>{
    //     console.log(like[i]);
    //     like[0].innerHTML = `<button id="butn${i}" class="butn">1</button>`;
    //     });
