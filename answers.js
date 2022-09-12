////////////////////////////////
// Easy Going
////////////////////////////////
// for (i=1;i<=20;i++){
//     console.log(i)
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (i=0;i<=200;i++){
//     if(i%2==0){
//         console.log(i)
//     }
    
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for(i=1; i<=100 ;i++)
// {   if(i%5==0 && i%3==0){console.log("FizzBuzz")}
//     else if(i%3==0){console.log("Fizz")}
//     else if(i%5==0){console.log("Buzz")}
//     else{ console.log(i)}
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


// plantee.splice(2, 1, 5001)
// console.log(plantee)
// wolfy.splice(3,1, "Gotham City")
// console.log(wolfy)
// dart.push("Hawkins")
// console.log(dart)
// wolfy.splice(0,1, "Gameboy")
// console.log(wolfy)
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const Turtles = [`Donatello`, `Leonardo`, `Raphael`, `Michaelangelo`]
// const newTurtles = []

// for(let turtle of Turtles){
//     newTurtles.push(turtle.toUpperCase())
// }
// console.log(newTurtles)

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf(`Titanic`))
// favMovies.sort()
// console.log(favMovies)
// favMovies.pop()
// console.log(favMovies)
// favMovies.push(`Guardians of the Galaxy`)
// console.log(favMovies)
// favMovies.reverse()
// console.log(favMovies)
// favMovies.shift()
// console.log(favMovies)
// favMovies.unshift(`Bad boys II`)
// console.log(favMovies)
// favMovies.splice(favMovies.indexOf(`Django Unchained`), 1, `Avatar`)
// console.log(favMovies)
// const half = favMovies.length / 2
// const spliced = favMovies.slice(0, half)
// console.log(spliced)
// console.log(spliced.indexOf("Fast and Furious"))
////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// console.log(whereIsWaldo.splice(1,1))
// whereIsWaldo[1].splice(2, 1, "No One")
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }
// for(i=0;i<=20;i++){
//     console.log(`Love me, pet me! HSSSSSS!"`)
//     if(i%2==0){
//         let rng = getRandomInt(0, 3)
//         if (rng===0){
//             console.log("...human...why you taking pictures of me?...")
//         }
//         else if(rng === 1){
//             console.log("...the catnip made me do it...");
//         }
//         else {
//             console.log("...why does the red dot always get away...");
//         }

//     }
//     else{
//         continue
//     }
// }

////////////////////////////////
//  Find the Median
////////////////////////////////
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// let median = Math.floor(nums.length/2)
// console.log(nums[median])
// let total = 0
// for(i=0;i<nums.length;i++){
//     total += nums[i]   
// }
// console.log(total)
// Expected output:>= 15