const express = require('express');

const APP = express();
const PORT = 5000;

APP.get('/', (req,res) => {
    res.send('hello from express')
})

APP.listen(PORT, () => console.log('Server is running on port ' + PORT))