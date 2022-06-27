var minPartitions = function(n) {
   let val= n.split("")
   return Math.max.apply(Math, val);
};