// operators

const { _android } = require("@playwright/test");
const { getRandomValues } = require("crypto");

let x=10;
x+=5;
console.log(x);  //15

//let x =10;
x-= 5;
console.log(x); //10

x*=5;
console.log(x); //50

//Increment Operator ++
let val=10;

//post increment = val++ =>val =val+1
console.log(val++); //10
console.log(val);  //11


//pre increment 
console.log(+val); //12
console.log(val ); //12

/* Strict Equality

1. compare the data types and
2. Comapare the values 

Non Strict Equality 

Compare only the values not the data types */

console.log(1===1);   //true
console.log(1===5);            //false
console.log(1==='1');  //false
console.log('chrome' ==='Chrome');  //false -  as it is case sensitive
console.log(1==true); //true //In Java script cerces the boolean to a numbeer type -->1  //righjt side to left side
console.log(1===true);  //false
console.log(true=='true');  //false
console.log(5==true); //false















