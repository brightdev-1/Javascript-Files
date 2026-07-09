//Write A Conditional Statement To Check If A Person Can Enter  Club:
//Must Be 18+
//Must Have An ID Card


let age = 18;
let id = true;
if (age <= 28 && id === true) {
    console.log("You can enter the club");
} else {
    console.log("You cannot enter the club");
}

//2. Write A Simple Calculator
//Your variables Are: num1, num2, operator
//Use conditional statement to check for addition, subtraction, multiplication, and division.



let num1 = 10;
let num2 = 5;
let operator;

if (operator === "+") {
    console.log(num1 + num2);
} else if (operator === "-") {
    console.log(num1 - num2);
} else if (operator === "*") {
    console.log(num1 * num2);
} else if (operator === "/") {
    console.log(num1 / num2);
} else {
    console.log(num1 * num2);
}


//CLASSWORK
//CREATE A PROGRAM THAT CALCULATES CINEMA TICKET PRICE BASED ON AGE.
//RULES:
//AGE BELOW 13 - TICKET PRICE IS  #1,000
//AGE 13-17 - TICKET PRICE IS #1,500
//AGE 18-59 - TICKET PRICE IS #2,500
//AGE ABOVE 60 - TICKET PRICE IS #1,200
//ON WEEKEND , ADD #5,00 TO THE TICKET PRICE

let aged = (13);
let isWeekend = ("yes");

let ticketPrice = (0);

if (age < 13) {
    ticketPrice = 1000;
} else if (age >= 13 && age <= 17) {
    ticketPrice = 1500;
} else if (age >= 18 && age <= 59) {
    ticketPrice = 2500;
} else {
    ticketPrice = 1200;
}

if (isWeekend === "yes") {
    ticketPrice += 500;
}

console.log(ticketPrice);


//classwork2.

let orderAmount = 25000;
let discount = 0;
let finalAmount = 0;


if (orderAmount > 10000) {
    discount = 0.05 * 25000;
} else if (orderAmount > 20000) {
    discount = 0.10 * 25000;
} else if (orderAmount > 50000) {
    discount = 0.15 * 25000;
} else {
    discount = 0;
}

finalAmount = orderAmount - discount;

console.log("Original Amount: ₦" + orderAmount);
console.log("Discount: ₦" + discount);
console.log("Final Amount: ₦" + finalAmount);


//scope: is a function of how variables are accessed in different parts of a program. There are three types of scope: global scope, local scope, and block scope.

//global scope: variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the program.


//function: is a block of code that performs a specific task and can be reused throughout a program. Functions can take parameters and return values. They are defined using the function keyword followed by the function name and parentheses. The code to be executed is enclosed in curly braces.

//types of functions: there are several types of functions in JavaScript, including:

//1. named or regular function: A function that is defined with a name and can be called before it is defined in the code. Example:
// function moral() {
//     console.log("Hello, World!");
// }
// moral(); // Output: Hello, World!

//2. Arrow Function: A shorter syntax for writing function expressions, introduced in ES6. Example:
// const moral = () => {
//     console.log("Hello, World!");
// };
// moral(); // Output: Hello, World!   


//assignment
//create a function that calculates an employees net salary 
//the function should accept
//i. Employee name
//ii. Basic salary
//iii. years of experience
//notes: emloyees with less than 2 years of experience get a 0% bonus, employees with 2-5 years of experience get a 10% bonus, and employees with more than 2 years of experience get no bonus.
// employees with 2-5 years of experience get a 5% bonus.
// employees with more than 5 years of experience get a 10% bonus.
// if next salary exceeds #500,000 , deductt 7.5% tax
// logm out the employee's name, basic salary,bonus,net salary.

function calculateNetSalary(employeeName, basicSalary, yearsOfExperience) {
    let bonusPercentage;

    if (yearsOfExperience < 2) {
        bonusPercentage = 0;
    } else if (yearsOfExperience <= 5) {
        bonusPercentage = 0.05;
    } else {
        bonusPercentage = 0.10;
    }

    // Calculate bonus amount
    const bonus = basicSalary * bonusPercentage;

    // Calculate gross salary
    const grossSalary = basicSalary + bonus;

    // removing 7.5% tax if gross salary superceeds ₦500,000
    let tax = 0;
    if (grossSalary > 500000) {
        tax = grossSalary * 0.075;
    }

    // Calculate net salary
    const netSalary = grossSalary - tax;

    // Log the details
    console.log(`Employee Name: ${employeeName}`);
    console.log(`Basic Salary: ₦${basicSalary.toLocaleString()}`);
    console.log(`Bonus (${bonusPercentage * 100}%): ₦${bonus.toLocaleString()}`);
    console.log(`Net Salary: ₦${netSalary.toLocaleString()}`);

    return netSalary;
}
console.log("");
calculateNetSalary("Badairo Daniel", 600000, 10);

calculateNetSalary('tayo', 20000)



//assignment 2
//build a mobile data plan advisor
// the function should accept customer name and budget
//rules:
//below #500....dailly plan
// #500-#1,999...weekly plan
// #2,000-#4,999...monthly plan
// #5,000 and above...premium monthly plan

//log out the customer name, budget, and recommended plan.

function recommendDataPlan(customerName, budget) {
    let recommendedPlan;
    if (budget < 500) {
        recommendedPlan = "Daily Plan";
    } else if (budget >= 500 && budget < 1999) {
        recommendedPlan = "Weekly Plan";
    } else if (budget >= 2000 && budget < 4999) {
        recommendedPlan = "Monthly Plan";
    } else {
        recommendedPlan = "Premium Monthly Plan";
    }
    console.log(`Customer Name: ${customerName}`);
    console.log(`Budget: ₦${budget.toLocaleString()}`);
    console.log(`Recommended Plan: ${recommendedPlan}`);
    return recommendedPlan;
}
console.log("");
recommendDataPlan("Badairo Daniel", 3000);

console.log("");

//assignment
//write a function that handles hotel booking cost.
//the function should accept: guest name, room type and number of nights.
//room rates:
///standard= #20,000/night
//deluxe= #35,000/night
//executive= #50,000/night
// for guest with more than 4nights should enjoy 10% discount
//handle invalid room type.


function CalculateHotelCost(guestName, roomType, nights) {
    let rate;
    if (roomType === "standard") {
        rate = 20000;
    } else if (roomType === "deluxe") {
        rate = 35000;
    } else if (roomType === "executive") {
        rate = 50000;
    } else {
        return `invalid room type: ${roomType} choose: "standard, deluxe, executive"`;
    }

    //calculating total cost
    let totalCost = rate * nights;

    //10% discount if night>4
    if (nights > 4) {
        totalCost = totalCost * 0.9;
    }

    return `Guest: ${guestName}, Room: ${roomType}, Nights: ${nights}, Total: ${totalCost}`;
}
console.log(CalculateHotelCost("dan", "standard", 3));
console.log(CalculateHotelCost("precious", "deluxe", 3));



//question4.
// write a function to calculate ride fare
//the function should accept: passenger name, distance and ride type

//ride rates:
//bike = #100/km
//car = #200/km
//bus = #80/km

//distance above 20km should attract 10% discount
// minimum fare is #500 i.e even if the passenger fare is not up to 500, they must pay 5-00.


function calculateRide(passengerName, distance, rideType) {
    let rate;

    if (rideType==="bike") {
        rate = 100;
    }else if (rideType==="car") {
        rate = 200;
    }else if (rideType==="bus") {
        rate = 80;
    }else{
        return `invalid ride type: ${rideType} choose: bike,car,bus`;
    }

    //calculate total km
    let fare = rate * distance;

    //discount>20=10% discount
    if (distance>20) {
        fare = fare * 0.9;
    }
    //minimum fare=500
    if (fare < 500) {
        fare =500;
    }

    return `passenger: ${passengerName}, distance: ${distance}km, ride: ${rideType}, Fare: #${fare}`;

}
console.log(calculateRide("bright",25,"car"));

// ----------DOM AND EVENT-----------
