// On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.

// need to require these to use

const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('.routes/index.js');

// the process asks to use the assigned port, if not, use this one
const PORT = process.env.PORT || 3001;

// use the app variable when using express
const app = express();

// this will parse everything to json, the use is middleware
app.use(express.json());


// GET * should return the index.html file.
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);


// GET /notes should return the notes.html file.
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
);
// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/db/db.json'))
);

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// feedbackjs has an example of unique id

// title and text

app.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
        };
        append(newNote, './db/db.json');
        res.json('New note added successfully');
        } else {
            res.error('note not added for some odd reason');
        }
    });

