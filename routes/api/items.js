// Use the express router
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require('../../models/Items');

// @rout    GET api/items ('/')
// @desc    Get ALL items
// @access  Public
router.get('/', (req, res) => {
    // Take the model and use the find method
    Item.find()
        .sort({ date:-1 })      // sort by descdening order of date
        .then(items => res.json(items))
});

// @rout    POST api/items ('/')
// @desc    Create an Item
// @access  Private (the second parameter makes sure you're authenticated)
router.post('/', auth, (req, res) => {
    // Create a new object to add to the db
    const newItem = new Item({
        name: req.body.name
    });

    // spit out that item in json
    newItem.save().then(item => res.json(item));
});

// @rout    DELETE api/items ('/')
// @desc    Delete an Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
    // You need to find the item using the ID
    Item.findById(req.params.id)
        .then(item => item
            .remove()
            .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;