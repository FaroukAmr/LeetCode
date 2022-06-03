let value = [1,5,10,50,100,500,1000];
let symbols = ["I","V","X","L","C","D","M"];
var romanToInt = function(s) { 
    let sum=0;
    for(let i=0;i<s.length;i++){
        sum+=findIndex(s.charAt(i),s.charAt(i+1)); 
    }
    return sum;

};

function findIndex(s,n){
    

    if(s==="I" && (n==="V" || n=="X")){
        return -1;
    }

    if(s==="X" && (n==="L" || n=="C")){
        return -10;
    }

    if(s==="C" && (n==="D" || n=="M")){
        return -100;
    }

    for(let i=0;i<symbols.length;i++){

        if(s===symbols[i]){
            return value[i];
        }
    }
    return -1;
}
