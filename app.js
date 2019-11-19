var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('hbs', exphbs(
    {
        defaultLayout: 'main.hbs',
        layoutsDir: 'views/_layouts'
    }));
app.set('view engine', 'hbs');

// Set cho từng trang
app.get('/', (req, res) => {
    res.render('home',{
        style: 'main.css',
        title:'Home-auction'
    });
})

app.get('/samsung', (req, res)=>{
    res.render('samsung',{
        style: 'main.css',
        title:'Samsung'
    });
})

app.get('/nokia', (req, res)=>{
    res.render('nokia',{
        style: 'main.css',
        title:'Nokia'
    });
})

app.get('/xiaomi', (req, res)=>{
    res.render('xiaomi',{
        style: 'main.css',
        title:'Xiaomi'
    });
})

app.get('/dell', (req, res)=>{
    res.render('dell',{
        style: 'main.css',
        title:'Dell'
    });
})

// Set directory for css
app.use(express.static(__dirname + '/Contents'));

//Listen to port 3000
app.listen(3000);