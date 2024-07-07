// loop
// it basically means repetition - repeating a section of code a number of times until a condition is met.
// 1. while loop
//2 .for loop
//3.  do while loop - rarely used 

const names=[" Stella" , " Fifi" , "pinkie"];

//syntax of a for loop.
/*
for(initialization; condition ; increment/ decreament){
   body of the loop 
  }
*/

  // access -index - starts from 0
  // index - length of array -1;
  // condition

   for(let i=0 ;i<names.length; i++ ){
     console.log( names[i])
   }

// Iteration 
 // executing a set of statements once for each element in a collection.(array / object)
 // arrays  for ...of  

 const mynumbers=[1,2,3,4,5,6];

 //SYNTAX

/* 
for(const i for nameoftheArray ){
 body of for ..of
}
*/ 

for(const number of mynumbers){
  console.log(number*2)
}

// DRY and simple 

 // for .... in -objects

// SYNTAX
/*
for (const key in nameOfAnObject){
  body of for ... in 
}
 */




 // Accessing values in an object

// bracket notation
//Dot notation -non stndard keys 

console.log(student.age);

console.log(student["age"])


for (const key in student){
  console.log(key)      // Doesnt get inside the nested object -it output is just the top level keys 
  if(typeof student[key] ==="object"){
      for(const  nestedKey in student[key]){
          console.log(nestedKey)
      }
  }

}

// RECURSION
// is a function that calls itself
function deepIteration(obj){
  for(const key in obj){
    console.log(key)    // the top level keys
    if(typeof obj[key]==="object"){
      deepIteration(obj[key])  // allows iteration in the nested objects
    }
  }

}

// deepIteration(student);



// RECAP .
// DIFFERENT TYPES OF LOOPS -while ,for , do..while loop;
// syntax 
const numbers=[1,2,3,4,5,6,7,8];
// for(let i=0; i<numbers.length; i++){
//   console.log(numbers[i]);
// }
 
// let i=0;
// while(i<numbers.length){
//   console.log(numbers[i])
//   i++; 
// }

//  iteration .
// for.. of statement 
for(const element of numbers){
  console.log(element) // store the index

}
// objects
// for ...in

const student={
  firstName: "Stella",
  secondName: "Margy",
  age:24,
  dream:"To utilize my potential to the fullest",
  
 philosophies :{
    philosphy1:"Hard work pays",
    philososphy2:{
      selfLove: "Neverlook down upon yourself",
      relationship:"Be kind to other people"
    }
  },
}




// deep iteration 
// recursion - when a function calls itself .
// allow us to access a single value for a specific key 
// hoMework ? how deep ITERATION??
console.log(student["philosophies"]["philosphy1"]) 



