var lengthOfLastWord = function(s) {
    let currentWord=""
    let savedWord=""
    for(let i=0; i<s.length; i++){
        if(s.charAt(i)===" "){
            currentWord===""?void(0):savedWord=currentWord;
            currentWord=""
        }else{
            currentWord+=s.charAt(i);
        }
    }
    return currentWord===""?savedWord.length:currentWord.length
};