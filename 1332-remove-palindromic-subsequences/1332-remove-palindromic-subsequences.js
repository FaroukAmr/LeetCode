var removePalindromeSub = function(s) {
    for(let i=0;i<s.length/2;i++){
        if(s.charAt(i)!=s.charAt(s.length-1-i)){
            return 2
        }
    }
    return 1
}