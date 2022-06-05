var isValid = function(s) {
   let stack =[]
   for(let i=0;i<s.length;i++){
       switch(s.charAt(i)){
           case ")":
               if(stack.pop()!="("){
                   return false;
               }
               break
            case "]":
                if(stack.pop()!="["){
                    return false;
                }
                break
            case "}":
                if(stack.pop()!="{"){
                    return false;
                }
                break
            default:
                stack.push(s.charAt(i));
       }
   }
   if(stack.length===0){
       return true;
   }
   return false;
}