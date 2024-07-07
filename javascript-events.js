// JAVASCRIPT EVENTS.
//JavaScript has the ability to "listen" for things that happen inside the browser.
// Events are the "something the user does" and the "callback function" is the work that will happen in response to the event being triggered.


//Different types of events.
// 1. Mouse Events:
    // click: Triggered when an element is clicked.
    // dblclick: Triggered when an element is double-clicked.
    //mouseover: Triggered when the mouse pointer is moved over an element.
    //mouseout: Triggered when the mouse pointer is moved out of an element.
    //mousedown: Triggered when a mouse button is pressed down on an element
    //mouseup: Triggered when a mouse button is released over an element
    //mousemove: Triggered when the mouse pointer is moving while it is over an element.

// 2.Keyboard Events:
    //keydown: Triggered when a key is pressed down
    //keyup: Triggered when a key is released.keyup: Triggered when a key is released.
    //keypress: Triggered when a key is pressed down and then released
    

//3 .Form Events
    // submit: Triggered when a form is submitted.
    //change: Triggered when an input element's value is change
    //focus: Triggered when an element gains focus
    //blur: Triggered when an element loses focus.


//4 .Document Events
   //DOMContentLoaded: event fires when your page's DOM is fully parsed from the underlying html

   //NB : It is important to note that the DOMContentLoaded event fires once the initial HTML document finishes loading, but does not wait for CSS stylesheets or images to load. In situations where you need everything to completely load, use the load event instead

   //While both will work, it is often the case that we only need the HTML content to fully load in order to execute our JavaScript. Since images can take some time to load, using the load event means visitors of a webpage may see your webpage in its original state for a couple of seconds before any JavaScript fires and updates the DOM.


//5.Clipboard Events
    // copy -Triggered when the user copies content
    // cut: Triggered when the user cuts content.
    //paste: Triggered when the user pastes content.


//6 .Window Event
    //load: The load event fires when a resource and all its dependent resources (including CSS and JavaScript) have finished loading
    //resize: Triggered when the browser window is resized.
    //scroll: Triggered when the user scrolls the page.


//Create Event Listeners on DOM Nodes with addEventListener()

//In order for JavaScript to handle an event, we first need to tell it to listen for that event
// 1. We do this by calling the addEventListener() method on the element we want to add the listener to, and passing it two arguments
// 2 the name of the event to listen for, and a callback function to "handle" the event



const div=document.querySelector("#my-div")
// console.log(div);
const button= document.querySelector("button");
button.addEventListener("click", (e)=>{
    const heading=document.querySelector("#my-title");
    heading.innerHTML=" A Trip to Kenya";
})

// SUBMIT EVENT 

const form=document.querySelector("form")
form.addEventListener("submit", (e)=>{
   e.preventDefault()  // it prevents the default behaviour of a form 
  const nameValue=document.querySelector("#name").value;
  alert(nameValue)

  console.log(nameValue);
})



 
