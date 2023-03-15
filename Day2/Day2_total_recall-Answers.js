// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Easy Going

// let number = 0;
// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// };

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Get Even

// let evenNum = 0;
// for (let j = 0; j <= 200; j++) {
//     if (j % 2 === 0) {
//         console.log(`${j} is an even number.`);
//     }
// };

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Fizz Buzz

// let numToFizzBuzz = 0;
// for (let b = 0; b <= 100; b++)
//     if(b % 3 === 0) {
//         console.log("Fizz");
//     } else if(b % 5 === 0) {
//         console.log("Buzz");
//     } else(b % 3 === 0 || b % 5 === 0); {
//         console.log("FizzBuzz");
//     };

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant", 5000, "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// plantee[2] = 5001;
// console.log(plantee);
// wolfy[3] = "Gotham City";
// console.log(wolfy);
// dart.push("Hawkins");
// console.log(dart);
// wolfy[0] = "Gameboy";
// console.log(wolfy);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Yell at the Ninja Turtles

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// const upperTurtles = []
// for(let item of ninjaTurtles){
//     upperTurtles.push(item.toUpperCase())
// }
// console.log(upperTurtles);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'b Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies[8]);
// favMovies.sort();
// console.log(favMovies); 

// .sort method changes the order of the array;

// favMovies.pop()
// console.log(favMovies);

// .pop method removes last index from array

// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);
// .push method adds an extra index to end of array;

// favMovies.reverse();
// console.log(favMovies);
// reverse flips the order from end to beginning;
// favMovies.shift()
// console.log(favMovies);
// .shift method removes the first index from the array;

// favMovies.unshift("Akira");
// console.log(favMovies);
// .unshift method ADDS an index to the beginning of the array;
// favMovies.splice(15, 1, "Avatar");
// console.log(favMovies);
// splice method is used to replace an index for another of your choice

// const halfIndex = Math.ceil(favMovies.length / 2);
// console.log(halfIndex[4]);
// actualFavMovies = favMovies.slice(0,9);
// console.log(actualFavMovies);
// console.log(favMovies);
// console.log(favMovies[14]);
// .slice method gives you a selected list of indexes from an array using parameters
// no need to use "let" when we are altering the array only not where variable is stored 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
// Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// console.log(whereIsWaldo[1].splice);
// whereIsWaldo[2] = ["Lucinda", "Jacc", "No one", "Snoop"];
// console.log(whereIsWaldo[2]);
// console.log(whereIsWaldo[3][1][1]);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
//  Excited Kitten

// moewLove = "Love me, pet me! HSSSSSSS!";
// meowSays = ["...human... why are you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];

// for(let i = 0; i < 20; i++){
//     console.log(i + moewLove);
//     if(i % 2 === 0){
//         console.log(meowSays[Math.floor(Math.random()* meowSays.length)]);
//     }
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@ COMPLETED @@@@@@@@@@@@@@
//  Find the Median

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// numsOrder = nums.sort();
// console.log(numsOrder);
// const medianIndex = Math.floor((0 + nums.length) / 2);
// console.log(nums[medianIndex]);


// Expected output:
// => 15