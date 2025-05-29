// Hoisting

// var hoisting

console.log(x);
var x=10;  //undefined

/* Explanation var x is hoisted to the top of the scope , 
only the declaration is hoisted , not the assignment .   */

//Internally


var y;  //hoisted goes to undefined
console.log(y);  //undefined
y=10;

//let and const hoisting

/*console.log(z);
const z=20; */ //ReferenceError : Cannot access 'z' before initialization 


/* Explanation :  
let and const are also hoisted ,but not initialized.

They exists in a "Temperal Dead Zone (TDZ)"     */

//Internally  :

let b;  //hoisted but in TDZ
console.log(b);    //underfined
b=40;


/*
const c ; //hoisted but in TDZ
console.log(c);   //Reference Error 
c=50 ;  */


