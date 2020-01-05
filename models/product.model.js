const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    //Thêm 
    add: entity => db.add('products', entity),
    addDetailProduct: entity => db.add('prodetails', entity),
    addImageProduct: entity => db.add('proimage', entity),
    addOfferProduct: entity => db.add('offerpro', entity),

    //load 
    all: id => db.load(`select * from products where Item = ${id}`),
    getPro: id => db.loadOnePro(`select * from products where ProID = ${id}`),
    getDetailPro: id => db.loadOnePro(`select * from prodetails where ProID = ${id}`),
    getImgPro: id => db.loadOnePro(`select * from proimage where ProID = ${id}`),
    //bidder đã đặt giá cao nhất trước đó
    getBestPricePrevious: id => db.loadOnePro(`select o.Bidder,o.PricePlaceBid,o.MaxBid from offerpro as o where ProID =${id} and StatusWinner = 1`),
    getProductPrice: id => db.loadOnePro(`select p.PriceBegin,p.PriceStep from products as p where ProID =${id}`),
    //Người đã đặt giá trước đó vào đặt giá tiếp
    getOfferBidder: (id,Bidder) => db.loadOnePro(`select * from offerpro where ProID =${id} and Bidder = ${Bidder}`),

    //Xóa
    del: id => db.delete(`delete from products where ProID = ${id}`),

    //Cập Nhật 
    patch: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        return db.patch('products', entity, condition);
    },
    updateStatusWinner: entity =>{
        const condition1 = { ProID: entity.ProID };
        const condition2 = {Bidder : entity.Bidder};
        delete entity.ProID;
        delete entity.Bidder;
        return db.patchtwocondition('offerpro', entity, condition1,condition2);
    },

    //Đếm
    countByCat: async Item => {
        const rows = await db.load(`select count(*) as total from products where Item = ${Item}`);
        return rows[0].total;
    },
    pageByCat: (Item, offset) => db.load(`select * from products where Item = ${Item} limit ${config.paginate.limit} offset ${offset}`),
    //     console.log(condition, entity);
    //     return db.patch('products',entity,condition);
    // },
    
};