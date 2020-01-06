const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');
const session = require('express-session');
const numeral = require('numeral');
const path = require('path');
const categoryModel = require('../../models/category.model');
require('express-async-errors');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //     secure: true
    // }
}))
  

// use public path
//app.use(express.static('Contents'));
app.use(express.static(path.join(__dirname, '/Contents')));
app.engine('hbs', exphbs(
    {
        defaultLayout: 'main.hbs',
        layoutsDir: 'views/_layouts',
        helpers:{
            section: express_handlebars_sections(),
            format: val => numeral(val).format('0,0')
        }
    })
);


// app.use(require('./middlewares/locals.mdw'));

require('./middlewares/locals.mdw')(app);
require('./middlewares/routes.mdw')(app);

app.set('view engine', 'hbs');
//Set cho từng trang
app.get('/', (req, res) => {
    const rows = await categoryModel.all();
    res.render('home.hbs', {
        title: 'Home-auction',
        categories: rows,
        empty: rows.length === 0
    });
})

app.get('/alert',(req,res)=>{
    res.render('alert.hbs',{
        title:'Alert'
    });
})

app.get('/alertUpgrade',(req,res)=>{
    res.render('alertUpgrade.hbs',{
        title:'Alert Upgrade'
    });
})

app.get('/alertComplete',(req,res)=>{
    res.render('alertComplete.hbs',{
        title:'Alert Complete'
    });
})
app.use((req,res,next)=>{
    // res.render('vwError/404');
    //res.send('you \'re lost');
    res.render('pageError/page-404.hbs',{
        layout:false
    });
})

//default error handler
app.use( (err, req, res, next)=> {
    console.error(err.stack);
    // res.render('/vwErro/index');
    //res.status(500).send('View error log in cosole')
    res.render('pageError/page-500.hbs',{
        layout: false
    });
  })


//listen to Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})