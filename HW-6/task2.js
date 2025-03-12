
function ageCheck(age){
 if(age>=18){
     return true;
 }
 else{
    return false;
 }
  
}

console.log(ageCheck(25) ? "adult" : "child" );
console.log(ageCheck(15) ? "adult" : "child");
