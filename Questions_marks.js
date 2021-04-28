function QuestionsMarks(str) { 

   var count = 0
       for(var i = 0; i < str.length; i++){
           if(str[i] == "?")
           count++
       }
       if(count>=3 && count<=10)
       return true;
       else
       return false;

}
   
// keep this function call here 
console.log(QuestionsMarks(readline()));