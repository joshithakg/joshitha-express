## Joshitha's Library

Joshitha's Library is a functional website to perform key operations in a library such as listing books, search for books by name, filter the result by author, published year and availability. We can also add books and manage issue and return of the books.  The intention of this project is to demonstrate the functionalities of the library over the website design. I have implemented this project using node.js, express.js and EJS template library to dynamically generate the HTML content to render on the browser. 

### What the Project Is and What It Does

Joshitha's Library demonstrates the following functionalities of a Library with modern technologes such as node.js and express.js.

Library functionalites implemented:

- Search for books by name (partial match will also work)
- Display a list of books with various attributes such as name, author, price, published year, rating and whether the book is availble to borrow or not
- Filters on the results (filter by author, published year or the status of issue)
- Issue a book or return an issued book
- Delete a book from the list 
- Add a new book 

Implementation technoloiges and features:

- Node.js - a runtime environment that allows JavaScript to be executed on the server-side
- Express.js - a web application framework built on top of Node.js to simplify the development of web applications and APIs by providing a set of tools and features 
- EJS (Embedded JavaScript) - a templating engine for Node.js that enables the generation of dynamic HTML markup by embedding JavaScript logic directly within HTML files. - HTML markup languages to design a website
- CSS - to apply styles on the webpage embedded in the HTML
- Java script - Client side script embedded in the HTML

### Why I Made This Project

I want to learn the backend implementation especially with node.js being popular to create server side runtime enviroment in just couple lines of code. Also express.js that go well with node.js to easily create a web application. I wanted follw the service based approach especially get, post http methods to send and retrive data from the website. 

###  How I Made It

First I decided on the functionalities of the application and the list of services I need to create at the server side and its corresponding code in the UI side.

I spent sometime understanding the server side technologies like node and express js. Also how I could write various services using get and post methods through server side java script code. 

Then I need to define my inline data objects for storing book details. Also I found template library to easily process object inline on the HTML code

Next, I started writing each services, its input and output parameters. Then I wrote the correspondind UI code to read and render them in the page

I tested every service along with its UI after implementation. 

Finally I integrated them all and tested end to end. Fixed few issue that I have found and it was completed after that.

###  What I Struggled With

I ran into a few challenges while building this website:

- how to get started with node and express js as it was entirely new to me. I need to know how I can install them, test running them
- Passing object, retaining the data between successive user submissions for various requests.
- Mixing HTML and java script code is new to me, I made mistake in following syntax etc, After few attempts it was easy to follow
  
### What I Learned

I learnt to a good extent of developing server side programs. It was very easy with Node.js particularly. The template library EJS was actually fun as I was always think HTML and processing code will be differnt, it was so nice to learn that I can embed processing code within HTML. 

### How to Play

- Open the project in Visual code and run this command in terminal 'node server.js'
- Open a browser and launch http://localhost:3000
  
### Possible Improvements

If I continue working on this project, I would like to add:

- Integrate with a database to store my data
- Complete library application with many other features
- More user specific functionalities like Book recommendations based on the readings

### Closing Thoughts

This project taught me a lot about how effecively and easily I can implement a backend solution. Latest technologies help make that quite easy but we should not forget learning the basics and concepts of an backend system.

### Screenshots
<img width="850" height="263" alt="image" src="https://github.com/user-attachments/assets/4a63ab95-e9e7-438b-bd38-7670e63ab6cd" />
<img width="830" height="137" alt="image" src="https://github.com/user-attachments/assets/43eaa682-cba8-4ed3-aeec-72d431cfc76f" />
<img width="828" height="272" alt="image" src="https://github.com/user-attachments/assets/60264257-b6f9-4f9e-ab86-6d674f029953" />
<img width="839" height="326" alt="image" src="https://github.com/user-attachments/assets/71911f3a-ad5b-4766-8c98-75bd45d233fd" />

## File Overview

### server.js

This contains the server side implementation with the server, data and services to serve specfic requests

### home.ejs

This contains the server side implementation having HTML and EJS code that is processed and rendered as HTML to the client

### README.md

That's this file.   

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)


