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

// Set directory for css
app.use(express.static(__dirname + '/Contents'));

//Listen to port 3000
app.listen(3000);