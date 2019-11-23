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

// Set cho từng trang
app.get('/', (req, res) => {
    res.render('home', {
        style: 'main.css',
        title: 'Home-auction',
        top5day, top5offer, top5value
    });
})

app.get('/cart', (req, res) => {
    res.render('cart', {
        style: 'main.css',
        title: 'Cart'
    });
})

app.get('/myprofile', (req, res) => {
    res.render('myprofile', {
        style: 'main.css',
        title: 'My Profile'
    });
})

app.get('/myorders', (req, res) => {
    res.render('myorders', {
        style: 'main.css',
        title: 'My Orders'
    });
})


// Set path for css
app.use(express.static(__dirname + '/Contents'));

// Set path for Detail Product
app.use('/user/detail', require('./routes/user/detail.product'));

// Set path for list prototype
app.use('/user/list', require('./routes/user/prototype'));

//Listen to port 3000
app.listen(3000);