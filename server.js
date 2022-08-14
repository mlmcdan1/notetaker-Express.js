const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const allRoutes = require('./routes');
//This is an easy way to generate all the public files.
app.use(express.static('./public'));
//Allows us to read the json object we work with to generate notes.
app.use(express.json());
// This will grab all the routes we have in routes/index.js (currently only the notes routes)
app.use('/api', allRoutes);

app.listen(PORT, () => {
	console.log(`App listening on http://localhost:${PORT} `);
});