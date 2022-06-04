var lengthOfLastWord = function(s) {
 let myArray = s.trim().split(" ")
 return myArray[myArray.length-1].length
};