
//Function Declaration
function getSquareRectang(width,height){
return width*height;
} 


//Function Expression
const getSquareRectangle = function(width, height) {
    return width * height;
}; 

//Arrow Function
const getSquareArrow = (width, height) => width * height;

console.log(getSquareRectang(5,10));