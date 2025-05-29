//looping statement


//for loop

 for(let index=1;index<=10;index++){
    console.log(index);
    
}

//for each

let automationtools=["playwright" , "selenium","Appium"]
automationtools.forEach(function(automation){
    console.log(automation);
    
}) 

automationtools.forEach((automation1)=>
{
    console.log(automation1);
    
})

//while loop to print numbers from 10 to 1 
let count=10;
while(count){
    console.log(count);
    count --;
    
} 

//Here 0 will not be printed as it would be falsy which means while (falsy) comes

//do while

let num =10;
do{
    console.log(num);
    num++;
}while(num<=5);

//you can run your loop at least once
