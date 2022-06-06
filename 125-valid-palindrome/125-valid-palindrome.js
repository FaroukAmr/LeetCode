var isPalindrome = function(s) {
    s = s.replace(/[^0-9A-Z]+/gi, "").toLowerCase()
    for(let i=0;i<s.length/2;i++){
        if(s.charAt(i)!=s.charAt(s.length-1-i)){
            return false;
        }
    }
    return true;   
};