const express = require('express');

const router = express.Router();

//Data------------------------
const listsamsung=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    }
]

const listnokia=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    }
]

const listxiaomi=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    }
]

const listdell =
[
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap02.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap03.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap04.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap05.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap06.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap07.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap11.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap09.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap10.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap02.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap03.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap04.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap05.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap06.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap07.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap11.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap09.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        },
        {
            image: "Dell/lap10.jpg",
            namePrototype: "Dell Vostro 3568",
            linkdetail: "/user/detail/dellvostro3560"
        }
]

const listasua=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    }
]

const listapple=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    }
]

const listlenovo=[
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
    },
    {
        image: "Dell/lap01.jpg",
        namePrototype: "ASUS X509FA-EJ239T"
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