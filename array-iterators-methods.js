// //Higher order functions 

// //A higher order function is a function that does atleast one of the things.
// 1 .Takes in one or more function as an argument (parameter )
// 2 .returns the function as a result.

// indexOf()-s called on an array and takes two arguments: the value you are looking for and an optional start position. It compares each element in turn to the value you're looking for using the strict equality operator (===) and returns the index of the first matching element. If the element isn't contained in the array, it returns -1.

//  indexOf(value , start position)
//  const cards = [
//   "queen of hearts",
//   "jack of clubs",
//   "ten of diamonds",
//   "ace of spades",
// ];
// const foundIndex = cards.indexOf("ace of spades", 2);
// console.log(foundIndex);

// // console.log(foundCards)

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const firstOddNumber = numbers.find((number) => number % 2 !== 0);
// console.log(firstOddNumber);
// // const allOddNumbers = numbers.filter((number) => number % 2 !== 0);
// // console.log(allOddNumbers);
// // let oddNumbers = numbers.filter(function(number) {
// //     return number % 2 !== 0;
// // });

// // console.log(oddNumbers); // Outputs: [1, 3, 5, 7, 9]



// //find( )method - allows you to execute more complex searches by passing it a callback function. The method will automatically iterate through the array, call the callback on each value, and return the first element in the array that satisfies the condition defined by the function. If no matching element is found, undefined is returned.
// // return an elemnent whose result is equal to W

const records = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2014", result: "X" },
];
// const win = records.find((element) => element.year === "2014");
// console.log(win);

// // const win=records.find((record)=>record.year==="2017")
// // console.log(win)

// // //filter()
// // //Return an array-another array
// // //We've seen the Array methods available in JavaScript to find a single element, but sometimes we want to return all elements that match a certain condition.

const filteredRecord=records.filter((record)=>record.year==="2014");
console.log(filteredRecord);
// console.log(oddnumbers)


// // // map()
// // //Another very common built-in array method is .map(), which transforms every element in an array to another value
// // //While both .filter() and .map() return a new array, .filter() returns a subset of the original array (unless all elements meet the provided condition) in which the elements are unchanged. .map(), on the other hand, returns a new array that's the same length as the original array in which the elements have been modified.
// // const multipliedNumbers=numbers.map((number)=>number*2);
// const otherNumbers=[20,10,40,50,60]
// const mappedNumbers=otherNumbers.map((otherNumber)=>otherNumber*2)
// console.log(mappedNumbers);




// // // reduce()
// // //Sometimes we want to find or transform elements in a list, but other times we might want to create a single summary value. In this lesson, we'll learn how to use the reduce() iterator method to aggregate a result, i.e., to reduce a list to a single value. That value can be a string, a number, a boolean, etc.
// // //
// const summedValue=numbers.reduce((sum,number)=>sum+number)
// console.log(summedValue)

// //forEach( ) - an iterator  - replace the idea of for loops
// // //Unlike the other methods we've looked at in this section, forEach() doesn't have a built-in return value. As a result, forEach() is quite generic — the callback we pass to it can contain whatever functionality we like
// // numbers.forEach((number)=>console.log(number*2))
// const numbers=[10,20,20,40,50]
// numbers.forEach((number)=>console.log( `the iterated number is : ${number}`));



// spread operator and destructing objects

// spread operator -returns a copy .Described by ellipses ...
// arrays and objects
const fruits=["bananas" , "apples" , "pinneaples"];
const copyFruits=fruits;
console.log(fruits);
console.log(copyFruits);

//sometimes we receive information in a collection (e.g., an Object) and we want to "pick and choose" elements out of the collection. It's a major pain to individually extract each property / value pair out of an Object and then assign it to a variable.

//Destructuring lets us type less and be more clear about what we want to pull out of an Object.

//
//Use Destructuring Assignment to Assign Data to Variable

const student={
    name: "Stella",
    age:20
}

let{name,age}=student;
console.log(name);
console.log(age);

const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFoods: {
      meats:{
        ham: 'smoked',
        hotDog: 'Oscar Meyer',
      },
      cheeses:{
        american: 'kraft'
      }
    }
  };


  const{ ham ,hotDog}=doggie.favoriteFoods.meats;
  console.log(ham)
  console.log(hotDog);


// Reduce .
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// 
const totalBatteries = batteryBatches.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(totalBatteries)