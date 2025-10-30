const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
let authors = 
    [
        "Erin Guendelsberger",
        "Random House",
        "Lori Haskins Houran"
    ];

let years = 
    [
        "2020",
        "2021",
        "2024"
    ];

let status = 
    [
        "Available",
        "Issued"
    ];    

let books = 
    [
        {
            "name":"Little Orange Pumpkin",
            "author":"Erin Guendelsberger",
            "price":"$19.99",
            "year":"2024",
            "rating":"4.8",
            "state":"Available"
        },
        {
            "name":"Open the Witch's Door",
            "author":"Random House",
            "price":"$9.50",
            "year":"2021",
            "rating":"4.8",
            "state":"Available"
        },
        {
            "name":"Let's go trick or treating",
            "author":"Lori Haskins Houran",
            "price":"$7.99",
            "year":"2020",
            "rating":"4.7",
            "state":"Available"
        }
    ];

    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get("/", (req, res) => {
         res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });
    });

    app.post("/", (req, res) => {
        const newBook = {
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            year: req.body.year,
            rating: req.body.rating,
            state: "Available"
        };

        books.push(newBook);
        if (!authors.includes(req.body.author)) {
            authors.push(req.body.author);
        }
        if (!years.includes(req.body.year)) {
            years.push(req.body.year);
        }
        
        res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });

    });

    app.post("/issue", (req, res) => {
        const reqBookName = req.body.name;
        books.forEach(book => {
            if (book.name === reqBookName) {
                book.state="Issued";
            }
        });
         res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });
    });

    app.post("/return", (req, res) => {
        const reqBookName = req.body.name;
        books.forEach(book => {
            if (book.name === reqBookName) {
                book.state = "Available";
            }
        });
        res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });
    });

    app.post("/delete", (req, res) => {
        const reqBookName = req.body.name;
        books = books.filter(book => book.name !== reqBookName);
        res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });
    });

    app.post("/filterByAuthor", (req, res) => {
        const reqAuthName = req.body.authName;
        if (reqAuthName === "All") {
            res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All'  });
        }           
        else {
            const filteredBooks = books.filter(book => book.author === reqAuthName);
            res.render("home", {data: filteredBooks, data1: authors, data2: years, data3: status, resAuthName: reqAuthName, resYearName: 'All', resStateName: 'All' });
        }
    });

    app.post("/filterByYear", (req, res) => {
        const reqYearName = req.body.yearName;
        if (reqYearName === "All") {
            res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All' });
        }           
        else {
            const filteredBooks = books.filter(book => book.year === reqYearName);
            res.render("home", {data: filteredBooks, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: reqYearName, resStateName: 'All' });
        }
    });
    
     app.post("/filterByState", (req, res) => {
        const reqStateName = req.body.stateName;
        if (reqStateName === "All") {
            res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All' });
        }           
        else {
            const filteredBooks = books.filter(book => book.state === reqStateName);
            res.render("home", {data: filteredBooks, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: reqStateName });
        }
    });

     app.post("/filterByName", (req, res) => {
        const reqBookName = req.body.bookName;
        if (reqBookName === "") {
            res.render("home", {data: books, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All' });
        }           
        else {
            const filteredBooks = books.filter(book => book.name.includes(reqBookName));
            res.render("home", {data: filteredBooks, data1: authors, data2: years, data3: status, resAuthName: 'All', resYearName: 'All', resStateName: 'All' });
        }
    });
    



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
