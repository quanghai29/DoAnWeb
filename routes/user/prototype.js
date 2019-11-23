const express = require('express');

const router = express.Router();

//Data------------------------
const listsamsung=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

const listnokia=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

const listxiaomi=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

const listdell =
[
        {
            image: "Dell/lap01.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap02.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap03.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap04.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap05.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap06.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap07.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap11.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap09.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap10.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap01.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap02.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap03.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap04.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap05.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap06.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap07.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap11.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap09.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        },
        {
            image: "Dell/lap10.jpg",
            name: "Dell Vostro 3580",
            pricecurrent: "50",
            IDcustomer: "b003"
        }
]

const listasua=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

const listapple=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

const listlenovo=[
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap01.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap02.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap03.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap04.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap05.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap06.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap07.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap11.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap09.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    },
    {
        image: "Dell/lap10.jpg",
        name: "Dell Vostro 3580",
        pricecurrent: "50",
        IDcustomer: "b003"
    }
]

router.get('/samsung', (req, res) => {
    const list=listsamsung;
    const namelist="SamSung";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product SamSung',
        list,namelist
    });
})

router.get('/nokia', (req, res) => {
    const list=listnokia;
    const namelist="Nokia";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Nokia',
        list,namelist
    });
})

router.get('/xiaomi', (req, res) => {
    const list=listxiaomi;
    const namelist="Xiaomi";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Xiaomi',
        list,namelist
    });
})


router.get('/dell', (req, res) => {
    const list=listdell;
    const namelist="Dell";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Dell',
        list,namelist
    });
})

router.get('/asua', (req, res) => {
    const list=listasua;
    const namelist="Asua";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Asua',
        list,namelist
    });
})

router.get('/apple', (req, res) => {
    const list=listapple;
    const namelist="Apple";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Apple',
        list,namelist
    });
})

router.get('/lenovo', (req, res) => {
    const list=listlenovo;
    const namelist="Lenovo";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product Lenovo',
        list,namelist
    });
})

var path = require('path');
path = path.join(__dirname, '../..', 'Contents');
router.use(express.static(path));
console.log(path);
module.exports = router;