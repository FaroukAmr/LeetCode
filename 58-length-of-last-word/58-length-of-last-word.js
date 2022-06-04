var lengthOfLastWord = function(s) {
 let myArray = s.split(" ");
 for(let i=myArray.length-1; i>=0;i--){
    if(myArray[i]!=""){
        return myArray[i].length;
    }
 }
};