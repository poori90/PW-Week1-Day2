//Scoping

var genderType ="male" ;   //global declaration

function printGender(){
    let color="green"    //function scope

    if(genderType.startsWith("female")){
        var age=30;
        let color ="pink";
        console.log("She / her Favourite color : " +color );  // Here the color is delcared using let
        
    }else {
        var age=35;
        console.log("He /Him  favorite color :  " +color);
        
    }
    console.log(age);  // var declared with in the block scope still accessible globally
    
}
printGender();