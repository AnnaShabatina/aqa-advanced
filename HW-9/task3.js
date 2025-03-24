const car1 = {
brand: "Vollkswagen" ,
model: "Tiguan",
year: 2020
};
const car2 = {
brand: "Toyota" ,
model: "Corolla" ,
owner:  2010
};
const car3 = {...car1, ...car2};
console.log(car3)