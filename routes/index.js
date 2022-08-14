//Having the routes come through this folder allows us to expand and include routes for more features in the future.
const { Router } = require('express');

const router = Router();

const notesRouter = require('./notes');
// This will allow the server.js to use all the routes found in routes/notes.js
router.use('/notes', notesRouter);

module.exports = router;