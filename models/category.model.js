const db = require('../utils/db');

module.exports = {
    allByList: id => db.load(`select * from itemlist where List = ${id}`),
    add: entity => db.add('itemlist', entity),
    getPro: id => db.loadOnePro(`select * from itemlist where ItemID = ${id}`),
    del: id => db.delete(`delete from itemlist where ItemID = ${id}`),
    patch: entity => {
        const condition = { ItemID: entity.ItemID };
        delete entity.ItemID;
        console.log(condition, entity);
        return db.patch('itemlist',entity,condition);
    }
};