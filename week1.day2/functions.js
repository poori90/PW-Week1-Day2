//Named Fuunctions

function funName1(){
    console.log("Hellow Team");
    
}
funName1()

function funName2(){
    let a =10;
    const b=20;
    return a+b;
}
console.log(funName2());

//Anonymous function // Function Expression

let function3 = function(){
    console.log("Hellow Team , this is anonymous function ");
    //return d=100;
    
}
function3();
//console.log(function3());

//Arrow Function :

let function4=()=> {  //fat arrow replace your function keyword
console.log("Hellow team this is Arrow function");
    
}
function4();

//single line Arrow function

const function5 = (a,b)=>a*b;
console.log(function5(2,2));

//IIFE - Immediate invoked function

(function(){
    console.log("Hello Team this is an IIFE function");
    
})
()

