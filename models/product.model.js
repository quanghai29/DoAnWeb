const db = require('../utils/db');

module.exports = {
    all: id => db.load(`select * from product where Item = ${id}`),
    add: entity => db.add('product', entity),
    getPro: id => db.loadOnePro(`select * from product where ProID = ${id}`),
    del: id => db.delete(`delete from product where ProID = ${id}`),
    patch: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        console.log(condition, entity);
        return db.patch('product',entity,condition);
    }
};