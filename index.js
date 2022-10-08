
const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('static'));

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'))



// try server pug file without path.join


app.get('/', (req, res)=>{
    res.render('./home.pug')
});

app.get('/about', (req, res)=>{
    res.send('This is my About Page.')
});

app.listen(port, ()=>{
    console.log('server is running')
});

