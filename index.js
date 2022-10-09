
const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/static', express.static('static'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.status(200).render('home')
});

app.get('/about', (req, res)=>{
    res.render('about')
});

app.listen(port, ()=>{
    console.log(`server is running ${port}`)
});

