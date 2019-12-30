const db = require('../utils/db');

module.exports = {
    all: () => db.load('select * from itemlist'),
    allByList: id => db.load(`select * from itemlist where List = ${id}`),
    single: id => db.load(`select * from itemlist where ItemID = ${id}`),
    add: entity => db.add('itemlist', entity),
    getPro: id => db.loadOnePro(`select * from itemlist where ItemID = ${id}`),
    //del: id => db.delete(`delete from itemlist where ItemID = ${id}`),
    del: id => db.del('itemlist', { ItemID: id }),
    patch: entity => {
        const condition = { ItemID: entity.ItemID };
        delete entity.ItemID;
        console.log(condition, entity);
        return db.patch('itemlist',entity,condition);
    },
    allWithDetail: _ => {
        const sql=`SELECT c.ItemID, c.ItemName, COUNT(p.ProID) AS num_of_products
                   FROM itemlist c LEFT JOIN products p ON c.ItemID=p.Item
                   GROUP BY c.ItemID, c.ItemName;`;
        return db.load(sql);
      },
};