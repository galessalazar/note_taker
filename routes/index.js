const router = require('express').Router();

// this may not work, its linking to this file so idk
const notesRouter = require('./public/assets/js/index');

router.use('/public/assets/index', notesRouter);


module.exports = router;