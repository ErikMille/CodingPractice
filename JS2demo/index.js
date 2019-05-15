
let str=prompt('?????');

let g=0;

for (let i=0; i<=str.length ;i++){
    if (str[i]==='('){g++;}
    if (str[i]===')'){g=g-1;}
    if (g<0){i=str.length;}
}

if (g===0){
    alert('GOOD');
}else{
    alert('YRUG');
}


