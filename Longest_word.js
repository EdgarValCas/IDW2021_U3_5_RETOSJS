function LongestWord(sen) { 

  var sensplit = sen.split(" ");
  var longestword = 0; 

  for(var i = 0; i < sensplit.length; i++){
    if(sensplit[i].length > longestword){ 
	  longestword = sensplit[i];
    }
  }
  return longestword;
}
   
// keep this function call here 
console.log(LongestWord(readline()));