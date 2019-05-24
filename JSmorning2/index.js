

// const eq = () =>{
//     document.querySelector('#eq').style.display='inline-block';
//     }
// const uneq = () =>{
//     document.querySelector('#eq').style.display='none';
//     }

    
    
    document.addEventListener('DOMContentLoaded',
    ()=>{        
        const btnEq=document.querySelector('#b1');
        btnEq.addEventListener('mouseenter',
        () => document.querySelector('.eq').style.display='inline-block'
        );
        btnEq.addEventListener('mouseleave',
        () => document.querySelector('.eq').style.display='none'
        );
    });








// document.addEventListener('DOMContentLoaded',

// ()=>{        
//     const btnEq=document.querySelector('#b1');
//     btnEq.addEventListener('mouseenter',eq);

//     const btnEq1=document.querySelector('#b1');
//     btnEq.addEventListener('mouseleave',uneq);

// });


// document.getElementById("ree").innerHTML=age;
// document.getElementById("eer").innerHTML=str;
