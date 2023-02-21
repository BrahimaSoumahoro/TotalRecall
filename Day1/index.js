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
    4.  /* Declare: is the fact of choosing then establishing a variable telling the program its identity and nature (what type of element it is)
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

//         /* Q7: Creating a variable */
//         let yourName = "Brahima Soumahoro";
//         console.log("Hello, my name is " + yourName);


// // C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a *
//          a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');        // javaScript will convert '48' into a number to please the user

// // D. The Farm
//        let animal ="cow";
//         if (animal != "cow") {
//                 console.log("Hey! You're not a cow.");
//         }
//         else    {
//                 console.log("mooooo");
//         }
                


// E. Driver's Ed
//      let arr = new Array();
//      driverAge = [16];
//      if (driverAge >= 16) {
//         console.log("BRAVO, Here are the keys!");
//      }

//      else {
//         console.log("Sorry, you're too young. No Keys for you!");
//      }




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
// let num = [];
        // for ( let i = 10; i <= 400; i++) {
        //         num = + i;
        //         console.log(" The number is "  +num);
        //         console.log(typeof num);
        // }  
        
// Q3: Write a loop that will print out every third number starting with 12 and going no higher than 4000    

        // let i = 12; 
        //         while (i < 4000) {
        //         num = i += 3;
        //         console.log(" The number is "  +num);
        //         // console.log(typeof num);
        // }    


// B. Get even
     
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
// C. Give me Five


        // for (let i = 1; i <=100; i++) {
        //         if (i % 5 === 0 && i % 3 === 0)   {
        //                 console.log(i + " is a multiple of both 5 and 3"); 
        //         } else if (i % 5 === 0){
        //         console.log("I found a " + i + " High Five");
                
        // }else if (i %3 === 0) {
        //         console.log("I found a " + i + " Three is a crowd");
        //         }
        // }

// D. Savings account
//       Const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//       const bank_account = 
//       function bank_account() {
//         console.log(sum);
//       }

// function accountNumber() {
// let bank_account = '';
// const givenNumber = '0123456789';

// for ( let i = 0; i < 10; i++) {
//         bank_account += givenNumber[Math.floor(Math.random() * givenNumber.length)];

// }
// return bank_account;


// }
// const bank_account = accountNumber();
// console.log(bank_account);
//_____________________________________________________________

// function sum(0,1,2,3,4,5,6,7,8,9,10) {
//         return ()
// }

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

// // B. Easy Does It
//         let quotes = ["quote 1", "quote 2", "quote 3" ];
//         console.log(quotes);

// // C. Accessing elements

//         const randomThings = [1, 10, "Hello", true];

//         // Q1: How do you access the 1st element in the array? 
//         /* we will access the 1st by logging the name and the index number of the that array which is 1 here */
//         console.log(randomThings[0]);
//         // Q2: replacing the "Hello" with "World" 2 ways.
//         console.log(randomThings[2] = "World");
//         // or
//         randomThings[2] = "World";
//         // Q3: The value has been updated, because now it shows World instead of the Hello as previously shown.
//         console.log(randomThings);


// // D. Change values 
//         const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//         console.log(ourClass[2]);
//         ourClass[4] = "Octocat";
//         console.log(ourClass);
//         ourClass.unshift("Cloud City");
//         console.log(ourClass);
       

// E. Mix It Up
        /* Adding an additional item to an Array without using .slice() */        
const myArray = [5, 10, 500, 20];
        myArray [4]= "Aegon";
        console.log(myArray);


// F. Biggie Smalls
// G. Monkey in the Middle
// H. What's in Your Closet?
//_____________________________________________________________








// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra



