
const browserVersion="chrome";  //Global constant override's the hoisting // reference error
function getBrowserVersion(){
   // let browserVersion="Google"
   if(browserVersion==="chrome"){
    let browserVersion="Edge"    //block scoped variable (shadowing the global variable)
    console.log("Inside block with let  : " , browserVersion);
    }
    console.log("Outside block with let  :  ", browserVersion);
    //var browserVersion="Exlorer"
    
}
getBrowserVersion();
console.log("Outside function : " , browserVersion);   //expected output : Chrome (global var)
