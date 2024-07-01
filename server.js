// On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.

// need to require these to use

const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/notes.js');

// the process asks to use the assigned port, if not, use this one
const PORT = process.env.PORT || 3001;

// use the app variable when using express
const app = express();

// this will parse everything to json, the use is middleware
app.use(express.json());

app.use('/api', api);
app.use(express.static('public'));


// GET * should return the index.html file.
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, './public/index.html'))
);


// GET /notes should return the notes.html file.
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);
// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/db/db.json'))
);






    app.listen(PORT, () =>
    console.log(`app listening at http://localhost:${PORT}`)
);
