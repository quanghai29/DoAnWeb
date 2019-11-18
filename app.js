var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('hbs', exphbs(
    {
        defaultLayout: 'main.hbs',
        layoutsDir: 'views/_layouts'
    }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home',{
        style: 'main.css'
    });
})


app.use(express.static(__dirname + '/Contents'));
app.listen(3000);