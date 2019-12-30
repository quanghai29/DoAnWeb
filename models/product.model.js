const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    all: id => db.load(`select * from products where Item = ${id}`),
    add: entity => db.add('products', entity),
    getPro: id => db.loadOnePro(`select * from products where ProID = ${id}`),
    del: id => db.delete(`delete from products where ProID = ${id}`),
    patch: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        return db.patch('products', entity, condition);
    },
    countByCat: async Item => {
        const rows = await db.load(`select count(*) as total from products where Item = ${Item}`);
        return rows[0].total;
    },
    pageByCat: (Item, offset) => db.load(`select * from products where Item = ${Item} limit ${config.paginate.limit} offset ${offset}`),
    //     console.log(condition, entity);
    //     return db.patch('products',entity,condition);
    // },
    addDetailProduct: entity => db.add('prodetails', entity),
    addImageProduct: entity => db.add('proimage', entity),
};