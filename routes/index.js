const router = require('express').Router();

const notesRouter = require('./public/assets/js/index');

router.use('/public/assets/index', notesRouter);


module.exports = router;