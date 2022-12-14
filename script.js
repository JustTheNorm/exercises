// How do we assign a value to a variable?
// using the = operator. const number = 1
// How do we change the value of a variable?
// using the = operator. const number = 2

// How do we assign an existing variable to a new variable?
// const number = number 2
// Remind me, what are declare, assign, and define?
// how to create a variable
// What is pseudocoding and why should you do it?
// writing out your code logic in plain english to help you understand what your code is doing
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 90% should be spent on understand and solving the problem

// ________________________________________________________________________________
// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
// 3. Change the value of this variable to some number
// 4. Store the value of firstVariablein a new variable called secondVariable
// 5. Change the value of secondVariableto any string.
// 6. What is the value of firstVariable?
20
// 7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let firstVariable = `Hello World`
// firstVariable = 20
// let secondVariable = firstVariable

// secondVariable = `hi`

// const yourName = `Norm`

// console.log(`Hello, my name is ${yourName}`)
// ________________________________________________________________________________


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console





// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false && false)
// console.log(e || 'Kevin');
// console.log(a < b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');
// ________________________________________________________________________________

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// const animal = `cow`

// if (animal == `cow`){
//     console.log (`Mooooo`)
// }
//     else{
//         console.log("Hey! You're not a cow.")
//     }
// ________________________________________________________________________________

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// const personAge

// if(personAge >= 16){
//     console.log("Here are the keys!")
// }
// else (
//     console.log("Sorry, you're too young.")
// )
// ________________________________________________________________________________

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for(i=0;i<=10; i++)
// {
//     console.log(i)
// }

// for(i=10;i<=400; i++)
// {
//     console.log(i)
// }
// for(i=12;i<=4000; i++)
// {
//     if (i%3==0)
//     {
//         console.log(i)
//     }
//     else{
//         continue
//     }
// }
// ________________________________________________________________________________


// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(i=1;i<=100; i++)
// {
//     if(i%2==0){
//         console.log(`${i} <--- is an even number`)
//     }
//     else{
//         console.log(i)
//     }
// }
// ________________________________________________________________________________


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for(i=0;i<=100; i++)
// {
//     if (i%5===0 && i%3===0)
//     {
//         console.log(`I found a ${i}. High five! Three is a crowd`)
        
//     }
//     else if(i%5==0){
//         console.log(`I found a ${i}. High five!`)
//     }
//     else if (i%3==0){
//         console.log(`I found a ${i}. Three is a crowd`)
//     }
//     else{
//         console.log(i)
//     }
// }
// ________________________________________________________________________________

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// let bank_account = 0
// for(i=1;i<=100; i++){
//     bank_account += i
// }
// bank_account *= 2
// console.log(bank_account)

// ________________________________________________________________________________


// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?
// elements
// Do Arrays guarantee those things will be in order?
// No
// What real-life thing could you model with an array?
// contact list/phone numbers
// ________________________________________________________________________________
// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = [`If you're not first. You're last`, `The people who make the most, Shoot the most`, `Efficiency is the enemy of innnovation`]

// ________________________________________________________________________________

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// using indexof
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// const randomThings = [1, 10, "Hello", true]

// randomThings.splice(1, 2, `World`)

// console.log(randomThings)

// ________________________________________________________________________________

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// ourClass.indexOf (2)
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass.splice(1, 4, `Octocat`)
// ourClass.push(`Cloud City`)



// ________________________________________________________________________________
// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// const myArray = [5, 10, 500, 20]

// myArray.push(`Aegon`)
// myArray.push(`Hello`)
// myArray.shift(`Bob Marley`)
// myArray.pop()
// myArray.reverse()   
// console.log(myArray)
// ________________________________________________________________________________
// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// let number = 0

// if (number < 100){
//     console.log(`Little number`)
// }
// else if (number >= 100)
// {
//     console.log(`Big number`)
// }


// ________________________________________________________________________________
// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let number = 0

// if (number < 5){
//     console.log(`Little number`)
// }
// else if (number > 10){
//     console.log(`Big number`)
// }
// else {
//     console.log(`monkey`)
// }
// ________________________________________________________________________________
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];


//   console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
//   kristynsCloset.splice(6, 0 ,`raybans`)
//   kristynsCloset.splice(5, 1 ,`stained knit hat`)
//   console.log(kristynsCloset)

//   console.log(thomsCloset[0][0])
//   console.log(thomsCloset[1][0])
//   console.log(thomsCloset[2][0])
//   console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and a ${thomsCloset[2][0]}!`)

//   thomsCloset[1][0].splice(2, 1 ,`Footie Pajamas`)
//   console.log(thomsCloset)
// ________________________________________________________________________________

// IV. Functions


// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// function printCool (name){
//     console.log( `${name} is cool`)
// }
// printCool("Captain Reynolds")

// ________________________________________________________________________________
// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.


// => 125

// function calculateCube(number){
//     number *= number
//     return number
// }
// console.log(calculateCube(5));
// ________________________________________________________________________________

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// function isVowel(x){
//     let result
//     x.toLowerCase()
//     result =  x.toLowerCase() === 'a' || x.toLowerCase() === 'e' || x.toLowerCase() === 'i' || x.toLowerCase() === 'o' || x.toLowerCase()=== 'u';
//     console.log(result) 
// }

// isVowel(`v`)
// ________________________________________________________________________________

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(str, str2){
//     let newArray = [str.length, str2.length]
// }
// ________________________________________________________________________________

// function getMultipleLengths(arr){
//     const newArr = arr.map()
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));