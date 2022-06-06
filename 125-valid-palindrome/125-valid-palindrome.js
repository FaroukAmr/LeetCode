var isPalindrome = function(s) {
    let c=""
    for(let i=0; i<s.length;i++){
        if(s.charAt(i).toLowerCase()!=s.charAt(i).toUpperCase()|| /^\d$/.test(s.charAt(i))){
            c+=s.charAt(i).toLowerCase();
        }
    }
    for(let i=0;i<c.length/2;i++){
        if(c.charAt(i)!=c.charAt(c.length-1-i)){
            return false;
        }
    }
    return true;   
};