

function divide(numerator,denominator){
    
    try{
        if(isNaN(numerator) || isNaN(denominator)){
            throw new Error("Error : One of the arguments is not a number")
        }
       else if(denominator ===0){
            throw new Error("Error: You can't devide by 0")
        }
        else{
            let res = numerator/denominator;
            console.log(res);
        }  
       

    }
     catch(error){
            console.log(error.message)
        }
        finally{
            console.log("Work completed")
        }

}
try{
divide(5,1);
}
catch (error) {
    console.log(error.message);

}
try{
divide(5,0);
}
catch (error) {
    console.log(error.message);
}
try{
    divide(5,"a");
}

catch (error) {
    console.log(error.message);
}
