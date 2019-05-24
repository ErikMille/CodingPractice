


    document.addEventListener('DOMContentLoaded',
    ()=>{        
        const btnEq=document.querySelector('#box');
    
        btnEq.addEventListener('mouseenter',
        () => document.querySelector('#list').className="list"
        );
        
        btnEq.addEventListener('mouseleave',
        () => document.querySelector('#list').className="list_hiden"
        );


        const item='reeee';
        const container=document.querySelector('.container');
        container.innerHTML='<div>Hello<div>';

        const box=document.createElement('div');
        box.className='boxx'
        box.innerHTML= `<p>rEEEEEEdf ${item}</p>`;
        container.appendChild(box);


        
        
        

        const btn=document.querySelector('#bott');
        btn.addEventListener('click',
        () =>{

        const items = [
            {name:'tomato',amount:1},
            {name:'reeeee',amount:2},
            {name:'bonano',amount:13},
            {name:'applatto',amount:4},
        ]
               
        
        container.innerHTML='';
        
        for(let i = 0; i < items.length; i++) {
            const liElm = document.createElement('li');
            liElm.className = 'item';
            liElm.innerHTML = `${items[i].name} ${items[i].amount}`;
            container.appendChild(liElm);
          }

        
        });



    });







