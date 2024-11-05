//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
*/

const abovetwfv = numbers.filter((num) => {
    if (num >= 25) return true;
    else return false;
});

console.log(abovetwfv);

/*
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const divisibleByFive = numbers.filter((num) => {
    return num % 5 === 0;
});
 console.log(divisibleByFive);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.

*/
const numbersSquared = numbers.map((num) => num ** 2);
console.log(numbersSquared);

/*
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const numbersDbl = numbers.map((num) => num * 2);
console.log(numbersDbl);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.

*/

const largerThntwnt = numbers.filter((num) => num >= 20);
const largerThntwntsq = largerThntwnt.map((num) => num ** 2);
console.log(largerThntwntsq);


/*
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
///const stepsixchn = numbers.filter((num) => num % 5 === 0).map((num) => num * 3);

const stepsixchn = numbers.filter((num) => {return num % 5 === 0 }).map((num) => num * 3);
console.log(stepsixchn);


/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/


/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/


/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
