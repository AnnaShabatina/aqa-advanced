const users = [
   { name : "Taras" , email : "Taras@gmail.com" , age : 37 } ,
    { name : "Anton" , email : "Anton@gmail.com" , age : 18 } ,
    { name : "Viktoria" , email : "Viktoria@gmail.com" , age : 27 }  
]

for (user of users) {
    const {name, email,age } = user;
  console.log("Name : " + name + "," + " email : " + email + "," + " age : " + age);
 
}
