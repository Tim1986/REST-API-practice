const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if (err) throw err;
        res.json(genres);
    });
});

app.post('/api/genres', function(req, res){
    let genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if (err) throw err;
        res.json(genre);
    });
});

app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if (err) throw err;
        res.json(books);
    });
});

app.get('/api/books/:_id', function(req, res){
    Book.getBookById(req.params._id, function(err, book){
        if (err) throw err;
        res.json(book);
    });
});

app.post('/api/books', function(req, res){
    let book = req.body;
    Book.addBook(book, function(err, book){
        if (err) throw err;
        res.json(book);
    });
});

app.listen(3000);
console.log('Running on port 3000...')