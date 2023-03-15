// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
   /* 1. We use the "=" operator 
    2. Also with the "=" operator
    3. With "=" operator
*/
/* 4. Declare: is the fact of choosing then establishing a variable telling the program its identity and nature (what type of element it is)
            Assigning: is giving the appropriate value to the variable for the purpose of the program, as giving a name to your child
            Define:is the allocation or granting or putting aside of the memory space / storage for that variable

    5. Pseudocoding is the blueprint of the program. it uses plain human language to describe the procedural structures and steps of the program 

        Pseudocode is used to for to find errors (debugging) the program and also explain the program and its procedural structures and steps to non-programmers. 
        */

// B. Strings
//          /* Q1: Creating a variable called firstVariable */
//          let firstVariable; 

//          /* Q2:Assigning "Hello world!" to the variable firstVariable*/
//         firstVariable = "Hello World"; 

//         /*to display the variable in the console */
//         console.log(firstVariable); 
//         console.log (typeof firstVariable);

//         firstVariable = "2023"; 
//         console.log (typeof firstVariable, "2023 here is still a string");

//         /*Converting firstVariable from a string to a number */
//         firstVariable = parseInt("2023");

//         /*to display the variable in the console */
//         console.log(firstVariable); 
//         console.log (typeof firstVariable);


               


//         let secondVariable;
//         secondVariable = firstVariable;
//         console.log(secondVariable, "this is ReAssignment of firstVariable into number");
//         console.log (typeof secondVariable);

//         /*Changing secondVariable from number to string */
//         let text = secondVariable.toString();
//         console.log (typeof text, "back to string");


//         // Q6: the value of firstVariable 
        
//         firstVariable.valueOf();
//         console.log(firstVariable, "value of firstVariable");

//Q7: Creating a variable 
        // let yourName = "Brahima Soumahoro";
        // console.log("Hello, my name is " + yourName);


// // C. Booleans "COMPLETED"
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR || "COMPLETED"
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a *
//          a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');        // javaScript will convert '48' into a number to please the user

// // D. The Farm  "COMPLETED"
//        let animal ="cow";
//         if (animal != "cow") {
//                 console.log("Hey! You're not a cow.");
//         }
//         else    {
//                 console.log("mooooo");
//         }
                


// // E. Driver's Ed          "COMPLETED"
//      let arr = new Array();
//      driverAge = [16];
//      if (driverAge >= 16) {
//         console.log("BRAVO, Here are the keys!");
//      }

//      else {
//         console.log("Sorry, you're too young. No Keys for you!");
//      }



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// II. Loops 

// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The Basics

/* Q1 : Write a loop that will print out all the numbers from 0 to 10, inclusive*/   

// let num = [];
//         for ( let i = 0; i <= 10; i++) {
//                 num = + i;
//                 console.log(" The number is "  +num);
//         }  

/* Q2: Write a loop that will print out all the numbers from 10 up to and including 400*/       

                         //      "COMPLETED"
// let num = [];
//         for ( let i = 10; i <= 400; i++) {
//                 num = + i;
//                 console.log(" The number is "  +num);
//                 console.log(typeof num);
//         }  
        
// Q3: Write a loop that will print out every third number starting with 12 and going no higher than 4000      

                //      "COMPLETED"

        // let i = 12; 
        //         while (i < 4000) {
        //         num = i += 3;
        //         console.log(" The number is "  +num);
        //         console.log(typeof num);
        // }    


// B. Get even ============= "COMPLETED"
     
        // let i = 1; 
        // while (i <= 100) {
        // if (i %2 == 0 ) {
        //         console.log(i + " The number is Even");
        //         console.log(typeof i);
        // } else{
        //         console.log(i + " is Odd number");
        // }
        // i++
        // } 
// console.log(typeof num);


// C. Give me Five @@@@@@@@@@@@@@@ "COMPLETED"


        // for (let i = 1; i <=100; i++) {
        //         if (i % 5 === 0 && i % 3 === 0)   {
        //                 console.log(i + " is a multiple of both 5 and 3"); 
        //         } else if (i % 5 === 0){
        //         console.log("I found a " + i + " High Five");
                
        // }else if (i %3 === 0) {
        //         console.log("I found a " + i + " Three is a crowd");
        //         }
        // }

// D. Savings account @@@@@@@@@@@@@@@ "COMPLETED"

// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//   bank_account += i;
// }
// console.log(bank_account);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ "COMPLETED"
// function accountNumber() {
// let bank_Account = '';
// const givenNumber = '0123456789';
// for ( let i = 0; i < 10; i++) {
//         bank_Account += givenNumber[Math.floor(Math.random() * givenNumber.length)];
// }
// console.log(bank_Account);
// // return bankAccount;

// }
// const bankAccount = accountNumber();
// console.log(bankAccount);
// // // _____________________________________________________________

// @@@@@@@@@@@@ NOT COMPLETED / DOESN'T WORK@@@@@@@@@@

// // function sum(0,1,2,3,4,5,6,7,8,9,10) {
// //         return ();
// // }

// const numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sum(...numb));
// console.log(sum.apply(null, numb));

/* ---------------------------------                */

// function sum(1,2,3,4,5,6,7,8,9,10)     {
//         return 1+2+3+4+5+6+7+8+9+10;
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// // console.log(sum(...numbers));
// console.log(sum.apply(null, numbers));



// III. Arrays & Control Flow

// A. Talk about it:
// What are the things in an array called?
        /* values */

// Do Arrays guarantee those things will be in order?
        /* No */

// What real-life thing could you model with an array?
        /* cars and Books */

// // B. Easy Does It  "COMPLETED"
        // let quotes = ["quote 1", "quote 2", "quote 3" ];
        // console.log(quotes);

// // C. Accessing elements   "COMPLETED"

//         const randomThings = [1, 10, "Hello", true];
                

// //         // Q1: How do you access the 1st element in the array?       "COMPLETED"
// //         /* we will access the 1st by logging the name and the index number of the that array which is 1 here */
//         console.log(randomThings[0]);
// //         // Q2: replacing the "Hello" with "World" 2 ways.          "COMPLETED"
//         console.log(randomThings[2] = "World");
// //         // or
//         randomThings[2] = "World";
// //         // Q3: The value has been updated, because now it shows World instead of the Hello as previously shown.
//         console.log(randomThings);


// // // D. Change values     "COMPLETED"
        // const ourClass = ["Salty", "Zoom", "Sardine",   
        //                 "Slack", "Github"];
        // console.log(ourClass[2]);
        // ourClass[4] = "Octocat";
        // console.log(ourClass);
        // ourClass.unshift("Cloud City");
        // console.log(ourClass);
       

// E. Mix It Up @@@@@@@@@@@@   "COMPLETED"  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* Adding an additional item to an Array without using .slice() */        

// const myArray = [5, 10, 500, 20];
//         myArray [4]= "Aegon";
//         console.log(myArray);
//         myArray[5]= "Brahima";
//         console.log(myArray);
// // to remove a value inside of the array by name or index number

//         myArray.shift("5");
//         console.log(myArray);
//                 // or
//         myArray.shift([0]);
//          console.log(myArray);

// // to ADD a new item in an existing array use .slpice() minimus number to add toward the front based on the index number of the wanted position, follow by a digit if we want to delete an existing item in the array at the index number.

//          myArray.splice(-5,0,"Bob Marley");
//          console.log(myArray);
// //  Remove an item from the end of the array
//         myArray.pop();
//         console.log(myArray);

// Q5: reverse
        // let reverse = ?
        // Yes I mutated the array, the order is reversed where the     elements were arranged from the last to the first from the initiate order
        // mutate refers to a change in the proprieties or structure
        

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// F. Biggie Smalls

        // for (let i = 0; i < 100, i++) {
        //         if (i = 0; i >0;) {
        //         console.log("little number")
        // } else  (i>100){ 
        //         console.log("Big number");
        // }
        // }

// G. Monkey in the Middle

        // for (let i = 1; i <=100; i++) {
        //         if (i % 5 === 0 && i % 3 === 0)   {
        //         console.log(i + " is a multiple of both 5 and 3"); 
        //                      } else if (i % 5 === 0){
        //            console.log("I found a " + i + " High Five");
                        
        //         }else if (i %3 === 0) {
        //           console.log("I found a " + i + " Three is a crowd");
        //                 }
        //         }







// H. What's in Your Closet? @@@@@@@@@@@@@@@@@ Completed @@@@@@@@

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ]; 
// // 1)- What's Kristyn wearing 
// console.log ("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// // 2)- Adding "raybans"
// kristynsCloset.splice(6, 0, "raybans");

// // 3)- Coffee spilled  
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// // 4)- Thom's ou 
// const thomsCloset = [
//   [
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
    
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
    
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // 5)- Thom's pants array
// console.log(thomsCloset[0][0]);

// console.log(thomsCloset[1][1]);

// // 6)-These are Thom's pants
// console.log(thomsCloset[2][2]);

// // 7)- Thom's accessories
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
// thomsCloset[1][2] = "Footie Pajamas"; 

//_______________________________________________________








//  Functions

// Part A. PrintGreeting
// const printGreeting = (name) => {
// 	return "Hello there, " + name + "!";
// };
// console.log(printGreeting("Slimer"));

// Part B. PrintCool
// const printCool = (argument) => {
// 	return argument + " is cool";
// };
// console.log(printCool("Captain Reynolds"));

// Part C. CalculateCube
// const calculateCube = (singleNumber) => {
// 	return singleNumber * singleNumber * singleNumber;
// }
// console.log(calculateCube(5));

// Part D. isVowel 
// const isAVowel = (character) => {
// 	if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isAVowel("a"));
// 
// Part F.  getMultipleLengths
//  const getMultipleLengths = (strArr) => {
// 	const multipleLengthArray = [];
// 	for (f = 0; f < strArr.length; f++){
// 		multipleLengthArray.push(strArr[f].length);
// 	};
// 	return multipleLengthArray;
// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.
// const maxOfThree = (number1, number2, number3) => {
// 	const threeNumArray = [number1, number2, number3];
// 	threeNumArray.sort(function(a, b){return a - b});
// 	return threeNumArray[2];
// };
// console.log(maxOfThree(6, 9, 1));

// Part H. printLongestWord
// const printLongestWord = (strArray) => {
// 	let longestWord = '';
// 	for (let g = 0; g < strArray.length; g++){
// 		if (strArray[g].length > longestWord.length){
// 			longestWord = strArray[g];
// 		}
// 	};
// 	return longestWord;
// };
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//_______________________________________________________






// Objects
// Part A. Making a user object
const user = {
	name: "Brahima Soumahoro",
	email: "jbrahism2@gmail.com",
	age: 43,
	purchased: [],
}; 

// Part B. Update the user
user.email = "soumb@gmail.com"
user.age++;
console.log(user);

//  Part C. Adding keys and values 
user.location = "Irvington";

// Part D.
// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");

// console.log(user.purchased[2]);

// //  Part E. OWO : Object-within-object

// user.friend = {
// 	name: "Grace Hopper",
// 	age: 85,
// 	location: "Irvington",
// 	purchased: [], 
// }; 
// console.log(user.friend.name);
// console.log(user.friend.location);
// user.friend.age -= 30;
// console.log(user.friend.age);
// user.friend.purchased.push("The One Ring");
// user.friend.purchased.push("A latte");
// console.log(user.friend.purchased);
// console.log(user.friend.purchased[1]);

// // Part F.
// for (let i = 0; i < user.purchased.length; i++) {
// 	console.log(user.purchased[i]);
// }

// for (let i = 0; i < user.friend.purchased.length; i++) {
// 	console.log(user.friend.purchased[i]);
// }

// // G.
// function updateUser() {
// 	user.age++,
// 	user.name.toupperCase();
// }
// function oldAndLoud(person) {
// 	person.age++;
// 	person.name = person.name.toupperCase();
// }
// oldAndLoud(user);
// console.log(user);
//______________________________________________________


// Extra



