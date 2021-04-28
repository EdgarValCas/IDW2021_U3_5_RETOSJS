function BracketMatcher(str) { 
  depth=0;
  for(var i=0;i<str.length;i++){
    if(str[i]=='('){
      depth++;
    }else if(str[i]==')'){
      depth--;
    }
    if(depth<0) return 0;
  }
  return (depth==0)?1:0;
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
BracketMatcher(readline());
