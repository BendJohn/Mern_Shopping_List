// Things we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

// Use Routes - anything that goes to /api/items should refer to the file ^^^
app.use('/api/items', items);

// Create variable for port you're going to use. Specifically for Heroku
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));