const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let books = 
    [
        {
            "name":"Little Orange Pumpkin",
            "author":"Erin Guendelsberger",
            "price":"$19.99",
            "year":"08/06/2024",
            "rating":"4.8",
            "state":"Available"
        },
        {
            "name":"Open the Witch's Door",
            "author":"Random House",
            "price":"$9.50",
            "year":"07/13/2021",
            "rating":"4.8",
            "state":"Available"
        },
        {
            "name":"Let's go trick or treating",
            "author":"Lori Haskins Houran",
            "price":"$7.99",
            "year":"07/06/2021",
            "rating":"4.7",
            "state":"Available"
        }
    ];

    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get("/", (req, res) => {
        res.render("home", {data: books});
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
        res.render("home", {data: books});

    });

    app.post("/issue", (req, res) => {
        const reqBookName = req.body.name;
        books.forEach(book => {
            if (book.name === reqBookName) {
                book.state="Issued";
            }
        });
        res.render("home", {data: books});
    });

    app.post("/return", (req, res) => {
        const reqBookName = req.body.name;
        books.forEach(book => {
            if (book.name === reqBookName) {
                book.state = "Available";
            }
        });
        res.render("home", {data: books});
    });

    app.post("/delete", (req, res) => {
        const reqBookName = req.body.name;
        books = books.filter(book => book.name !== reqBookName);
        res.render("home", {data: books});
    })


//app.get('/', (req, res) => {
  //  res.send('Welcome to Joshitha\'s Library !');
//})  


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
