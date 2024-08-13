

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

greetingByName("Bryan");


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
let margaritoSandwich = sandwichMaker("white",undefined, "buffalo", "lettuce")




//! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.

//TODO Define an Array: Define an array containing a list of 5 grades.
let grades = [85,34,56,87,90];
let gradeTwo = [82,56,31,78,67];
let currentAverage = calcAverage(grades);

//TODO Create a Function: Create a function to calculate the average of the grades.
//? calculates the average grade from an array of grades
function calcAverage(gradesArr) {
    let average = 0;
    for (let i = 0; i < gradesArr.length; i++) {
        average += gradesArr[i]
        
    }
    average = average / gradesArr.length;
    return average
}

console.log(currentAverage)

//TODO Create Another Function: Create another function to determine the letter grade based on the average.

function letterGrade(gradeNum) {
    if (gradeNum > 100) {
        console.log(`${gradeNum} can't exist and recieve no letter!`)
    } else if (gradeNum >= 90) {
        console.log(`${gradeNum} has a A average!`)
    } else if (gradeNum >= 80) {
        console.log(`${gradeNum} has a B average!`)
    } else if (gradeNum >= 70) {
        console.log(`${gradeNum} has a C average!`)
    } else if ( gradeNum >= 60 ) {
        console.log(`${gradeNum} has a D average!`)
    } else {
        console.log(`${gradeNum} has a F average!`)

    }
}

letterGrade(currentAverage)
letterGrade();
//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade. 




//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.

//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.

function addATask(additionalTask) {
    //how do i add an item to the array?
    taskToDo.push(additionalTask);
    displayToDoList();
    
}

function displayToDoList() {
    console.log(taskToDo);
    
}
debugger
let taskToDo = [];
                    //!taskcompleted = "make food!"
function removeAnItem(taskCompleted) {
    //I need to remove a specific item.
    //If else statements? 
    // if (taskCompleted == "Make bed") {
    //     console.log("Its here!")
    // }
    
    let uppercaseTaskCompleted = taskCompleted.toUpperCase();
    //console.log(uppercaseTaskCompleted)








    console.log(taskCompleted); //String from function arguement 
    console.log(taskToDo) //array from global variable ;
                        //taskToDo = ARRAY OF DATA []
    // if (taskCompleted === taskToDo[0]) {
    //     taskToDo.splice(0,1);
    // } else if (taskCompleted === taskToDo[1]) {
    //     taskToDo.splice(1,1);
    // } else if( taskCompleted === taskToDo[2]) {
    //     taskToDo.splice(2,1)
    // }
    for (let i = 0; i < taskToDo.length; i++) {
        if (taskCompleted === taskToDo[i]) {
            taskToDo.splice(i,1);
            displayToDoList();
        }
    }
}


addATask("Make bed") //[0]
addATask("Code some") //[1]
addATask("Make food!") //[2]
removeAnItem("make food!")


//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.

//! BONUS: Be able to remove a task o.o 

