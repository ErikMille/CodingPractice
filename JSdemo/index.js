let age=40000;
while ((age>4000)||(age<0)) {
    age=prompt('nomber');}


//let age = document.getElementById("reee").value;

let num=age;
let arr=[];
while(num!==0){
    arr+=num%10; 
    num=Math.floor(num/10); 
}




let str='';

switch (arr[0]){
    case '1':
    str='I'+str;
    break;
    case '2':
    str='II'+str;
    break;
    case '3':
    str='III'+str;
    break;
    case '4':
    str='IV'+str;
    break;
    case '5':
    str='V'+str;
    break;
    case '6':
    str='VI'+str;
    break;
    case '7':
    str='VII'+str;
    break;
    case '8':
    str='VIII'+str;
    break;
    case '9':
    str='IX'+str;
}

switch (arr[1]){
    case '1':
    str='X'+str;
    break;
    case '2':
    str='XX'+str;
    break;
    case '3':
    str='XXX'+str;
    break;
    case '4':
    str='XL'+str;
    break;
    case '5':
    str='L'+str;
    break;
    case '6':
    str='LX'+str;
    break;
    case '7':
    str='LXX'+str;
    break;
    case '8':
    str='LXXX'+str;
    break;
    case '9':
    str='XC'+str;
}

switch (arr[2]){
    case '1':
    str='C'+str;
    break;
    case '2':
    str='CC'+str;
    break;
    case '3':
    str='CCC'+str;
    break;
    case '4':
    str='CD'+str;
    break;
    case '5':
    str='D'+str;
    break;
    case '6':
    str='DC'+str;
    break;
    case '7':
    str='DCC'+str;
    break;
    case '8':
    str='DCCC'+str;
    break;
    case '9':
    str='CM'+str;
}

switch (arr[3]){
    case '1':
    str='M'+str;
    break;
    case '2':
    str='MM'+str;
    break;
    case '3':
    str='MMM'+str;
    break;
    case '4':
    str='MMMM'+str;
}


document.getElementById("ree").innerHTML=age;
document.getElementById("eer").innerHTML=str;

alert(arr);
alert(str);

