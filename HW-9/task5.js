const users = [
   { name : "Taras" , email : "Taras@gmail.com" , age : 37 } ,
    { name : "Anton" , email : "Anton@gmail.com" , age : 18 } ,
    { name : "Viktoria" , email : "Viktoria@gmail.com" , age : 27 }  
]

for (const user of users) {
    
  console.log(`Name : ${user.name} , Email:  ${user.email} , Age :  ${user.age}`);
}
 


for (const user of users) {
    const {name, email,age } = user;
  console.log("Name : " + name + "," + " email : " + email + "," + " age : " + age);
 
}
