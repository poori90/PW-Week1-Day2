
/* String Declaration  :

1. String Litral
2. Object Literal */

//String Literal - " " ,'' ,``  // String pool memory //storing same value of two different variables in single address

let firstName = `Testleaf`;
let username = `Testleaf`;
console.log(firstName);
console.log(username);



//String Object  //Heap Memory it gets stored in two different memory addresses

let firstName1 = new String("Testleaf");
let userName1 = new String("Testleaf");
console.log(firstName1);
console.log(userName1);

