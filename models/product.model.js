const db = require('../utils/db');

module.exports = {
    all: id => db.load(`select * from products where Item = ${id}`),
    add: entity => db.add('products', entity),
    getPro: id => db.loadOnePro(`select * from products where ProID = ${id}`),
    del: id => db.delete(`delete from products where ProID = ${id}`),
    patch: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        console.log(condition, entity);
        return db.patch('products',entity,condition);
    }
};