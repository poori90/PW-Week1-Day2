// Classroom Assignment: 3 - Conditional Statements

function launchBrowser(){
    if(browser==="chrome"){
        console.log("Chrome Browser launched successfully ");
        
    }else if (browser==="edge"){
        console.log("Edge Browser launched successfully ");
    }else{
        console.log("No Browser launched ");

    }
}

let browser="edge";
launchBrowser();

//let testType="smoke";
function runTests(testType){
    switch (testType) {
        case 'smoke':
            console.log("This is Smoke Test type ");
            break;
        case 'sanity':
            console.log("This is sanity Test type ");
            break;
        case 'regression':
            console.log("This is regression Test type ");
            break;
        default:
            console.log("Default test type is smoke ");
            break;
    }
}
runTests();