var minPartitions = function(n) {
   let max=0;
   for(let i=0; i<n.length;i++){
      if(n.charAt(i)==9){
         return 9;
      }else{
         if(n.charAt(i)>max){
            max=n.charAt(i);
         }
      }
   }
   return max;
};