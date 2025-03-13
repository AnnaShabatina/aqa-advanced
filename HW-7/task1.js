 const handleEven = () =>{
    console.log( 'number is even');
    };
    
    const handleOdd = () =>{
    console.log( 'number is odd');
    };

function handleNum(num,evenCallback,oddCallback){
    if(num % 2 ==0){
return evenCallback();
    }
   else {
    return oddCallback();
    }


}
handleNum(6,handleEven,handleOdd);
handleNum(3,handleEven,handleOdd);
