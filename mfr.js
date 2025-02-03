// let number = parseInt(prompt("Enter your number")); // Convert string input to number

// if (number === 0 || number === 1) {
//     console.log("The factorial of the given number is: 1");
// } else {
//     let array = [];
//     for (let index = 1; index <= number; index++) {
//         array.push(index);
//     }

//     console.log("Generated array: ", array);

//     const red = (a, b) => a * b;

//     console.log("The factorial of the given number is: ", array.reduce(red));


//conver number from string to integer using parseint().
//Loop runs correctly from 1 to number (inclusive) to generate an array of numbers.
//fixing array.push index to correctly populated array.
//Handled 0 and 1 edge cases to return 1 directly without unnecessary calculations.




// for loop method

let number = parseInt(prompt("Enter your number")); // Converting input into an integer
let factorial = 1;

if (number === 0 || number === 1) {
    factorial = 1;
} else {
    for (let index = 2; index <= number; index++) {
        factorial *= index; // Multiply factorial by each number up to 'number'
    }
}

console.log(`The factorial of ${number} is: ${factorial}`);

