const express = require('express');
const router = express();

const morgan = require("morgan");

const colors = require('./colors')

//Homepage basically
router.get('/', (req, res) => {
        console.log('hi')
        res.send('This router definately works!!');
})

//returns all the colors
router.get('/allColors', (req, res) => {
    const allColors = colors.listColors();
    res.send(allColors);
})

//returns a val based off of a color
router.get('/:color', (req, res) => {
    const val = colors.findValue(color);
    res.send(`<h1 style='color: ${color}'> Value: ${val}</h1> `);
})

//returns a color based off of a value
router.get('/:val', (req, res) => {
    const color = colors.findValue(val);
    res.send(`<h1 style='color: ${color}'> Value: ${color}</h1> `);
})

module.exports = router;