const router = require('express').Router();

const notesRouter = require('./notes');
router.use('/api', notesRouter );

module.exports = router;