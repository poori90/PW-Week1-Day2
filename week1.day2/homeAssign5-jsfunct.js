//  Classroom Assignment: 5 -  JavaScript Functions

// Task 1: Function Declaration 

//let name='Testleaf';
function userProfile(name){
    console.log("Hello, " + name + " ! ");

}
userProfile('Testleaf');

//Task 2: Arrow Function
//Single Arrow
const double = (a)=>a*2;
console.log(double(6));
console.log("Hellow team this is Arrow function");
//Arrow function actual
let b=10;
let double1=(b)=>b*2; {  
     console.log(double1(b));
console.log("Hellow team this is Arrow function");
   
}
double1();

//Task 3: Anonymous Function

let anony = function(){
    setTimeout(()=>{console.log("This message is delayed by 2 seconds")},2000)
}
anony();


// Task 4: Callback Function

function getUserData(callback) {
  setTimeout(() => {
    const user = {
      name: "John Doe",
      age: 30,
    };
    callback(user);
  }, 3000);
}

getUserData(function(user) {
  console.log("User Name:", user.name);
  console.log("User Age:", user.age);
});
