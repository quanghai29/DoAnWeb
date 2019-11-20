var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('hbs', exphbs(
    {
        defaultLayout: 'main.hbs',
        layoutsDir: 'views/_layouts'
    })
);
app.set('view engine', 'hbs');

//Data ----------------------
const top5day =
[
   {
        image: "Dell/lap01.jpg",
        lastupdate:"3 mins"
   },
    {
        image: "Dell/lap02.jpg",
        lastupdate: "3 mins"
    },
    {
        image: "Dell/lap03.jpg",
        lastupdate: "3 mins"
    },
    {
        image: "Dell/lap04.jpg",
        lastupdate: "3 mins"
    },
    {
        image: "Dell/lap05.jpg",
        lastupdate: "3 mins"
    }
]

const top5offer=
[
    {
        image: "Dell/lap06.jpg",
        lastupdate: "3 mins"
    },
    {
        image: "Dell/lap07.jpg",
        lastupdate: "3 mins"
    }
]

const top5value=
[
    {
        image: "Dell/lap06.jpg",
        lastupdate: "3 mins"
    },
]
//----------------------------------------

// Set cho từng trang
app.get('/', (req, res) => {
    res.render('home', {
        style: 'main.css',
        title: 'Home-auction', 
        top5day, top5offer, top5value
    });
})

app.get('/samsung', (req, res) => {
    res.render('samsung', {
        style: 'main.css',
        title: 'Samsung'
    });
})

app.get('/nokia', (req, res) => {
    res.render('nokia', {
        style: 'main.css',
        title: 'Nokia'
    });
})

app.get('/xiaomi', (req, res) => {
    res.render('xiaomi', {
        style: 'main.css',
        title: 'Xiaomi'
    });
})

app.get('/dell', (req, res) => {
    res.render('dell', {
        style: 'main.css',
        title: 'Dell'
    });
})

app.get('/asus', (req, res)=>{
    res.render('asus',{
        style: 'main.css',
        title:'Asus'
    });
})

app.get('/apple', (req, res)=>{
    res.render('apple',{
        style: 'main.css',
        title:'Apple'
    });
})

app.get('/lenovo', (req, res)=>{
    res.render('lenovo',{
        style: 'main.css',
        title:'Lenovo'
    });
})

app.get('/cart', (req, res)=>{
    res.render('cart',{
        style: 'main.css',
        title:'Cart'
    });
})


// Set path for css
app.use(express.static(__dirname + '/Contents'));

// Set path for Detail Product
app.use('/user/detail', require('./routes/user/detail.product'));


//Listen to port 3000
app.listen(3000);