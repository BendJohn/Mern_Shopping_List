// Things we need
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');       // Deals with file paths
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err))

// Use Routes - anything that goes to /api/items should refer to the file ^^^
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));

// Serve static assets (in build) if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Create variable for port you're going to use. For non-Heroku testing, use port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));