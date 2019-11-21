const express = require('express');

const router = express.Router();

//Data------------------------
const listdell =
[
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        },
        {
            image: "Dell/lap01.jpg",
            namePrototype: "Dell Vostro 3568"
        }
]


router.get('/dell', (req, res) => {
    const list=listdell;
    const namelist="Dell";
    res.render('prototype/listprototype.hbs', {
        style: 'main.css',
        title: 'List product dell',
        list,namelist
    });
})

var path = require('path');
path = path.join(__dirname, '../..', 'Contents');
router.use(express.static(path));
console.log(path);
module.exports = router;