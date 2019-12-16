const express = require('express');
const categoryModel = require('../models/category.model');

const router = express.Router();

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

const user =
    [

    ];

router.get('/', async (req, res) => {
    const categoryMobile = await categoryModel.allByList(1);
    const categoryLaptop = await categoryModel.allByList(2);
    res.render('home',
        {
            categoryMobile, categoryLaptop,
            user: true,
            top5day, top5offer, top5value,
            empty: user.length === 0,
        })
})

module.exports = router;