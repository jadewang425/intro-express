// Load express
const express = require('express');
const path = require('path')

// require the To Do "database"
const todoDb = require('./data/todo-db')
const studentsDb = require('./data/students-db')

// create our express app
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// mount middleware (app.use)


// mount routes

// define a "root" route directly on app
// next lesson we'll use better practice routing
app.get('/', function(req, res) {
    // path MUST start with a leading slash
    res.redirect('/todos');
})

app.get('/home', function(req, res) {
    // never begin the name of the template with a forward slash
    res.render('home');
}) 

app.get('/todos', function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
})

app.get('/students', function(req, res) {
    const students = studentsDb.getAll();
    res.render('students/index', { students });
})

// tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

