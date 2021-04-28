function FirstReverse(str) { 

  // code goes here 
  var Strseparada = str.split("");
  var Strvolteada = Strseparada.reverse();
  var Strunir = Strvolteada.join("");
  return Strunir; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));