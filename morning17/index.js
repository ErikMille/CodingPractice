
    document.addEventListener('DOMContentLoaded',
    ()=>{        
        let i=0;
        // let like=[];
        const container=document.querySelector('#container');
        const btn=document.querySelector('#btn');
        btn.addEventListener('click',
        () =>{
            const text = document.createElement('div');
            const mess = document.createElement('div');
            if (conversation[i].side==='local'){
                mess.className='ram'; text.className='mess_ram';
            }else{
                mess.className='rem';text.className='mess_rem';
            }
            
            const pic = document.createElement('div');
            pic.className = 'pic';
            pic.innerHTML = `<img src="./assignment (9)/${conversation[i].name}.png" alt="">`;
            text.innerHTML=`<p>${conversation[i].text}</p>`;
            
            
            const like = document.createElement('div');
            like.className = 'pic';
            like.innerHTML = `<button id="butn" class="butn">0</button>`;
            console.log(like);
            like.addEventListener('click',
                () =>{
                console.log(like);
                like.innerHTML = `<button id="butn" class="butn">1</button>`;
                });

            mess.appendChild(pic);
            mess.appendChild(text);
            mess.appendChild(like);
            container.appendChild(mess);
            
            
            

            i++;
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
