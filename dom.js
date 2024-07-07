//Introduction to the DOM

//INTRODUCTION

//recap on html and css
//What is html used for?
//what is CSS used for?

//DOM programming consists of using JavaScript to:
// 1. Ask the DOM to find or select an HTML element or elements in the rendered page
// 2. Remove and/or insert one or more elements
// 3. Adjust a property of selected element(s)


//When the page initially loads, the DOM represents the underlying HTML, CSS and JavaScript. When we use JavaScript and DOM programming to modify the DOM and change what the user sees, the underlying code is not modified: if we refresh the page, it goes back to its original state.

// HOW IS THE DOM CREATED
// 1. Paste a url in the tab browser
// 2. browser sends requests to the server the server serves thr file 
// 3.The browser reads this HTML, along with CSS and JavaScript defined in <script> or <link> tags, to create the DOM inside the browser. At this point, nothing is displayed on the screen. This time when nothing is displayed is very brief so our human eyes never really catch it.
// 4 The browser then uses the DOM object to create the rendered page. While we often learn that browsers "display HTML," that's not exactly accurate. Browsers use the HTML to create a "middleman" that they, in turn, use to display the structured and styled content.



// HOW IS THE DOM ACCESSED
// We can access the DOM, using JavaScript and DOM programming, through two variables: window and document
// window and variable  have properties and methods.
//The window variable points to an object that represents Chrome's information about the browser, well, "window." It has many functions, but the main one is "it's a place where everything is."


// Most of the time we will focus on document.


// DOM is a tree 
// The webpage (HTML document) is the tree.
//Each element (like a paragraph, heading, or image) is a node (branch or leaf) on the tree
//You can use JavaScript to add, remove, or change these nodes, which updates what you see on the webpage.




//Accessing Elements
// 1. document.getElementsByTagName
//Since document.getElementsByTagName returns an HTMLCollection, you can access elements using their index:

//Looping Through Elements


// Access the paragraph example and use index to get the first paragraph in the HTML Collection
let  paragraph=document.getElementsByTagName("p"); // HTML COLLECTION
console.log(paragraph[1]);
  

//Or, convert the HTMLCollection to an array and use array methods(Array.from())
//HTMLCollection returned is array-like but not a true array. It does not have all array methods directly available.
 let paragraphsArray = Array.from(paragraph);

// tO ITERATE
paragraphsArray.forEach(paragraph => {
  console.log(paragraph.innerHTML);
});


//2. getElementById method in JavaScript allows you to select an element by its unique ID.

// let element = document.getElementById("elementId");
// let header=document.getElementById("header-sec")
// console.log(header)
 
let header=document.getElementById("header-sec");
console.log(header)
// document.getElementById returns null if no element with the specified ID exists.
//The ID must be unique within the document. If multiple elements have the same ID, only the first one will be returned. ------ for good practise make sure ids are unique

// Unlike getElementsByTagName and getElementsByClassName, getElementById returns a single element, not a collection.

// 3. Using the document.getElementsByClassName method in JavaScript allows you to select elements by their class name. This method returns an HTMLCollection of all elements with the specified class name.
// classes are used for classification in HTML

let section=document.getElementsByClassName("article-wrapper")
console.log(section)
// let elements = document.getElementsByClassName("className");
// let section=document.getElementsByClassName("article-wrapper");
// console.log(section)
// Accessing Element  

// Since document.getElementsByClassName returns an HTMLCollection, you can access elements using their index:
// let firstElement = myClassElements[0];
// let firstSection=section[0];

// Use a loop for iteration
//Or, convert the HTMLCollection to an array and use array methods:


// 4 . 
//The querySelector and querySelectorAll methods in JavaScript are powerful tools for selecting elements from the DOM using CSS selectors.
// The querySelector method returns the first element within the document that matches the specified selector or group of selectors.
//Since querySelector returns a single element, you can directly access its properties and methods
let h2=document.querySelector("p");
console.log(h2)

// querySelectorAll()
// The querySelectorAll method returns a static NodeList of all elements that match the specified selector or group of selectors.

let par=document.querySelectorAll("p")[0]




// let p=document.querySelectorAll("p")
// console.log(p[0])



// Creating and Inserting DOM Nodes

// Create DOM Elements Programmatically
//You simply call document.createElement('tagName'), where tagName is the name of any valid HTML tag ('p', 'div', 'span', etc.).
// const element = document.createElement("div");
// 1. You have to create your HTML ELEMNET
// 2. Append the element
// const span=document.createElement("span");
// const div=document.getElementById("my-div")
// document.body.append(span)

const h3=document.createElement("h3");
const divider=document.getElementById("my-div");
divider.append(h3);
h3.innerHTML="I am created!!"




// innerHTML
// is a property that gets or sets the HTML content inside an element
//When you use innerHTML, you can include HTML tags and structure within the content.

let div=document.querySelector("#my-div")
console.log(div);
div.innerHTML= "<p>I am  the  newly created paragraph! </p>"





// textContent
// is a property that gets or sets the text content inside an element.
// When you use textContent, it only includes plain text, without any HTML tags
par.textContent="I have used the text content method to set this."


// Key Difference
// innerHTML includes HTML tags and structure, whereas textContent only includes plain text.



// Change Properties on DOM Nodes
// We can change the appearance of a DOM node using its style attribute. Try this out in the console:
let heading=document.querySelector("h1");
heading.style.color="blueviolet";





// Remove Elements from the DOM
// removeChild() - REMOVES CHILD OF A PARTICULAR ELEMENT
//someElement.removeChild(someChildElement);

// header.removeChild(heading);

//element.remove() -simplier way 

heading.remove();
// We can just call remove() on the element itself:
//ul.remove();










// RESEARCH on CLASSNAME AND CLASSLIST - associated with css 

