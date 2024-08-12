

//functions can be called before initialization
//funcOne();

//function schema
//making functions saves blocks of code to be ran when we need it.
//INSTEAD of immediately running as the page loads
function funcOne() {
    console.log("Hello World!");
    console.log(5 + 7);
};
//This is how we call function code blocks to run
//ex. funcName(); 
funcOne();

let numOne = 7;
let numTwo = 3;


//Scope: whether it's GLOBAL, BLOCK, FUNCTION SCOPE(Local scope)
function addTwoNums() {
    console.log(numOne + numTwo);
}


addTwoNums();

//THis function is currently accepting two arguments (args)
function addTwoNumsV2(a,b) {
    console.log(a + b);
}

//We are sending data inside the arguments spots in functions;
addTwoNumsV2(numOne, numTwo);
addTwoNumsV2(6, 10);


function greeting() {
    console.log("HI");
}
greeting();
   
function greetingByName(name) {
    console.log("Hello, " + name + "! Welcome to the site.");
}
greetingByName("Dayna");


function greetingByExcitment(name) {
    //THIS let variable is only being seen inside this function!
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);
    
    //THIS IS Sending back the output of this function
    return upperCaseName
}
   
//IF you ever need a function to send back new data, You'll need a return
let screamingName = greetingByExcitment("zach");

// upperCaseName
//console.log(upperCaseName); //! ERRORED OUT bc Local scoped to "greetingByExcitment() function"
console.log(`HELLLLOOOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!`);

//THIS functions shows DEFAULT values being added in the Arguments
function sandwichMaker(typeOfBread, typeOfMeat = "N/A", typeOfSauce, typeOfVeggie = "N/A") {
    console.log(
        `Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce} Veggies: ${typeOfVeggie}`
    )
}

let zachSandwich = sandwichMaker("white", "ham", "mayo", "lettuce");
let margaritoSandwich = sandwichMaker("white",, "buffalo", "lettuce")