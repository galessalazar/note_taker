const notes = require('express').Router();
const { v4: uuidv4} = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../fsUtils');

notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => JSON.parse(data))
    .then((data)=>
         res.json(data)
    )
})

notes.get('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
        ? res.json(result)
        : res.json('no notes w that id mate');
    })
})



// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

notes.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully');
        } else {
            res.error('note not added for some odd reason');
        }
    });

    module.exports = notes;