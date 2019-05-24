let items = [
    {author:'Friedrich Hayek',pages:500,name:'The Road to Serfdom'},
    {author:'Mikhail Bakunin',pages:500,name:'God and the State'},
    {author:'Ayn Rand',pages:500,name:'Atlas shrugged'},
    {author:'Adam Smith',pages:500,name:'The Wealth of Nations'},
];


    document.addEventListener('DOMContentLoaded',
    ()=>{        
        const btnEq=document.querySelector('#box');
    
        btnEq.addEventListener('mouseenter',
        () => document.querySelector('#list').className="list"
        );
        
        btnEq.addEventListener('mouseleave',
        () => document.querySelector('#list').className="list_hiden"
        );      
        
        

        const container1=document.querySelector('#container1');
        container1.addEventListener('click',
        () =>{
        container1.innerHTML='';
        let i=0;
        const liElm = document.createElement('p');
        liElm.className = 'item';
        liElm.innerHTML = `${items[i].author}-${items[i].name} ${items[i].pages}`;
        container1.appendChild(liElm);
        });

        const container2=document.querySelector('#container2');
        container2.addEventListener('click',
        () =>{
        container2.innerHTML='';
        let i=1;
        const liElm = document.createElement('p');
        liElm.className = 'item';
        liElm.innerHTML = `${items[i].author}-${items[i].name} ${items[i].pages}`;
        container2.appendChild(liElm);
        });

        const container3=document.querySelector('#container3');
        container3.addEventListener('click',
        () =>{
        container3.innerHTML='';
        let i=2;
        const liElm = document.createElement('p');
        liElm.className = 'item';
        liElm.innerHTML = `${items[i].author}-${items[i].name} ${items[i].pages}`;
        container3.appendChild(liElm);
        });

        const container4=document.querySelector('#container4');
        container4.addEventListener('click',
        () =>{
        container4.innerHTML='';
        let i=3;
        const liElm = document.createElement('p');
        liElm.className = 'item';
        liElm.innerHTML = `${items[i].author}-${items[i].name} ${items[i].pages}`;
        container4.appendChild(liElm);
        });


        const btn=document.querySelector('#submit');
        btn.addEventListener('click',
        () =>{
        let item={author:'',pages:0,name:''};
        item.author = document.getElementById("author").value;
        item.name = document.getElementById("name").value;
        item.pages = document.getElementById("page").value;
        items[items.length]=item;
        });

    });







