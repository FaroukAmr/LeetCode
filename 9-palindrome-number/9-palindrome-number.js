var isPalindrome = function(x) {
    x+="";
    let mid = x.length/2;

    for(let i=0;i<mid;i++){
        if(x.charAt(i)!=x.charAt(x.length-1-i)){
            return false;
        }
    }
    return true
    
};
