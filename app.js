var express = require('express');
var exphbs = require('express-handlebars');
require('express-async-errors');

var app = express();
var hbs = exphbs.create();



app.engine('hbs', exphbs(
    {
        defaultLayout: 'main.hbs',
        layoutsDir: 'views/_layouts'
    })
);
app.set('view engine', 'hbs');

// Set path for css
app.use(express.static('Contents'));
//Data ----------------------
const top5day =
    [
        {
            image: "Dell/lap01.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap02.jpg",
            name: "Asua Gaming",
            pricecurrent: "60",
            IDcustomer: "b056"
        },
        {
            image: "Dell/lap03.jpg",
            name: "Dell Vostro 3680",
            pricecurrent: "90",
            IDcustomer: "b065"
        },
        {
            image: "Dell/lap04.jpg",
            name: "Lenovo 4365",
            pricecurrent: "70",
            IDcustomer: "b098"
        },
        {
            image: "Dell/lap05.jpg",
            name: "Macbook pro 13",
            pricecurrent: "120",
            IDcustomer: "b001"
        }
    ]

const top5offer =
    [
        {
            image: "Dell/lap06.jpg",
            name: "Dell Vostro 4580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap04.jpg",
            name: "Asua Gaming",
            pricecurrent: "60",
            IDcustomer: "b056"
        },
        {
            image: "Dell/lap11.jpg",
            name: "Dell Vostro 3680",
            pricecurrent: "90",
            IDcustomer: "b065"
        },
        {
            image: "Dell/lap12.jpg",
            name: "Lenovo 4365",
            pricecurrent: "70",
            IDcustomer: "b098"
        },
        {
            image: "Dell/lap10.jpg",
            name: "Macbook pro 13",
            pricecurrent: "120",
            IDcustomer: "b001"
        }
    ]

const user =
[

];

const top5value =
    [
        {
            image: "Dell/lap06.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap03.jpg",
            name: "Asua Gaming",
            pricecurrent: "60",
            IDcustomer: "b056"
        },
        {
            image: "Dell/lap02.jpg",
            name: "Dell Vostro 3680",
            pricecurrent: "90",
            IDcustomer: "b065"
        },
        {
            image: "Dell/lap07.jpg",
            name: "Lenovo 4365",
            pricecurrent: "70",
            IDcustomer: "b098"
        },
        {
            image: "Dell/lap09.jpg",
            name: "Macbook pro 13",
            pricecurrent: "120",
            IDcustomer: "b001"
        }
    ]
//----------------------------------------
//note: biến user để phân biệt người thường đăng nhập hay thành viên có tài khoản

app.get('/login', (req, res) => {
    res.render('login', {
        style: 'main.css',
        title: 'Login',
        user:true,
        empty: user.length === 0
    });
})
app.get('/signup', (req, res) => {
    res.render('signup', {
        style: 'main.css',
        title: 'user sign up',
        user:true,
        empty: user.length === 0
    });
})

// Set cho từng trang
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home-auction',
        user: true, 
        top5day, top5offer, top5value,
        empty: user.length === 0
    });
})





// Set path for list prototype
app.use('/user', require('./routes/user/index.js'));

app.use('/admin', require('./routes/admin/index.js'));

app.use((req,res,next)=>{
    // res.render('vwError/404');
    res.send('you \'re lost');
})

//default error handler
app.use( (err, req, res, next)=> {
    console.error(err.stack);
    // res.render('/vwErro/index');
    res.status(500).send('View error log in cosole')
  })


//listen to Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})