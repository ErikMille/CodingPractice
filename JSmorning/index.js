function balance(account){
    alert(arr1[account]);
}

function withdraw(account){
        mone=prompt('mone');
        if (arr1[account]>=mone){
            arr1[account]-=mone;
        } else{alert(nonono)}
        alert(arr1[account]);
    }


const arr=['000256784','000986056','001546238','030987456'];
let arr1=[790,5600,78065,120910];

let f=false;
let account;
while (f===false){
age=prompt('account');

    for (let i=0;i<arr.length;i++){
        if (arr[i]===age){
            f=true;
            account=i;
        }
    }
    if (f===false){alert('no account');}  
}

let act;
while((act!=='e')){
    act=prompt('action');
    if (act==='balance'){balance(account);}
    if (act==='withdraw'){withdraw(account);}
    if ((act!=='balance')&&(act!=='withdraw')){alert('unknown action');}
}


