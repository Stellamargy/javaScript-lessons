// Introduction to Communicating with the Server


//Objectives 
/*
1.  Recall our Three Pillars of Web Programming
2.  Describe the process of communicating with the server
3.  Define AJAX

 */

// Recall the three pillars of programming.
/*
1.Manipulating the DOM
2.Creating events
3.Communicating with the server

 */

//Describe the process of communicating with server
/*
LIKING A POST ON INSTAGRAM
The click event kicks off a sequence of actions to notify the server that the post has received a like. The server updates the post in the backend then passes a message back to the browser indicating that the update was made successfully. When that success message is received, we then update the DOM to reflect the change.

NOTE: The update to the DOM is not necessarily dependent on a success message from the server. We could just update the DOM in response to the click event itself. However, this is not the proper procedure. We only want to update the DOM once we know that the server successfully persisted the change in the backend.
 */

//DEFINE AJAX 
/*
Let us reference back to liking our the instagram post ? Do you actually see the entire process? 
The user doesn't see this entire process happening. Ideally, the process moves quickly enough that the user barely even notices that it took place. All they know is that the little heart icon is now reflecting their clicked appreciation. To keep the user experience fast and smooth, we use something called the AJAX technique.

WHAT IS AJAX?
AJAX is short for "asynchronous JavaScript and XML," and it's the process used to make requests to the server and update the DOM without reloading the web page.
You can implement this using fetch , axios  but we will look at fetch

The name "asynchronous JavaScript and XML" arises from the fact that, in the past, the data sent back to the browser from the server was encoded as XML. Now, however, it's most often sent back in a format known as JSON ("Jay-Sawn"). JavaScript Object Notation (JSON) is a String that JavaScript knows how to turn into an Object. Using JavaScript, we can access the JSON returned by the server and use it to update the DOM.
*/


// HOW THE WEB WORKS.
/*
LEARNING GOALS
Define a client and server
Explain what an HTTP request is
Explain the nature of request and response
Define a static site vs. a dynamic site


Define Internet?
Define Web?

Communication in the internet 
The internet operates based on conversations between the client (more familiarly known as the browser) and the server (the code running the web site you're trying to load). By typing in that URL into your browser, you (the client) are requesting a web page. The server then receives the request, processes it, and sends a response. Your browser receives that response and shows it to you.
NB:  Your browser doesn't know, nor does it care, what server it talks to
In addition, you can use multiple clients! You can use Chrome, Safari, Firefox, Edge, and many others. All of those browsers are able to talk to the same servers


HTTP Overview
HTTP-Hyper Text Transfer Protocol,is the "language" browsers speak.Every time you load a web page, you are making an HTTP request to the site's server, and the server sends back an HTTP response. When you use fetch in JavaScript, you are also making an HTTP request.

Request
URL- Uniform Resource Locator
When you make a request on the web, how do you know where to send it? This is done through Uniform Resource Locators, or URLs. You may have also heard these addresses referred to as URIs (Uniform Resource Identifiers). Both are fine. 

https://github.com/learn-co-curriculum/phase-1-how-the-web-works -paste this in your browsers

Let's define these parts of a URL

https - the protocol
github.com - the domain name
/learn-co-curriculum/phase-1-how-the-web-works - the path

For an analogy for how a URL works, think about an apartment building. The domain is the entire building. Within that building, though, there are hundreds of apartments. We use the specific path (also called a resource) to indicate that we care about apartment 4E. 
 
The protocol is the format we're using to send our request. There are several different types of internet protocols (SMTP for emails, HTTPS for secure requests, FTP for file transfers). To load a website, we use HTTP or HTTPS.

The domain name is a string of characters that identifies the unique location of the web server that hosts that particular website. This will be things like youtube.com and google.com.

The path is the particular part of the website we want to load. GitHub has millions and millions of users and repositories, so we need to identify the specific resource we want using the path: /learn-co-curriculum/phase-1-how-the-web-works.


HTTP VERBS 

When making a web request, in addition to the path, you also need to specify the action you would like the server to perform. We do this using HTTP VerbsLinks to an external site., also referred to as request methods.
 

For example, making a POST request to /learn-co-curriculum/phase-1-how-the-web-works tells the server something different from making a GET request to /learn-co-curriculum/phase-1-how-the-web-works.


GET requests are the most common browser requests. This just means "hey server, please GET me this resource", i.e., load this web page. Other verbs are used if we want to send some data from the user to the server, or modify or delete existing data.
// CRUD OPERATAIONS-CREATE READ UPDATE DELETE.
GET	Retrieves a representation of a resource
POST	Create a new resource using data in the body of the request
PUT	Update an existing resource using data in the body of the request
PATCH	Update part of an existing resource using data in the body of the request
DELETE	Deletes a specific resource
HEAD	Asks for a response (like a GET but without the body)
TRACE	Echoes back the received request
OPTIONS	Returns the HTTP methods the server supports
CONNECT	Converts the request to a TCP/IP tunnel (generally for SSL)


READ ON : Request Format , Reponses and Status Code . VERY IMPORTANT . 

*/ 
