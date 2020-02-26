const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {
    //Thêm 
    add: entity => db.add('products', entity),
    addDetailProduct: entity => db.add('prodetails', entity),
    addImageProduct: entity => db.add('proimage', entity),
    addOfferProduct: entity => db.add('offerpro', entity),

    //load 
    getListItem: id => db.load(`select p.*,count(*),pi.imgURL from products as p inner join proimage as pi on p.ProID = pi.ProID  where Item = ${id} group by(p.ProID)`),
    all: id => db.load(`select * from products where Item = ${id}`),
    getPro: id => db.loadOnePro(`select * from products where ProID = ${id}`),
    getAceptedDetailPro: id => db.loadOnePro(`select * from prodetails where ProID = ${id} and Modified=0`),
    getImgPro: id => db.loadOnePro(`select * from proimage where ProID = ${id}`),
    getProStatus: status => db.load(`select ProID, ProName, TimeBegin, TimeEnd from products where StatusID=${status}`),
    //bidder đã đặt giá cao nhất trước đó
    getBestPricePrevious: id => db.loadOnePro(`select o.Bidder,o.PricePlaceBid,o.MaxBid from offerpro as o where ProID =${id} and StatusWinner = 1`),
    getProductPrice: id => db.loadOnePro(`select p.PriceBegin,p.PriceStep from products as p where ProID =${id}`),
    //Người đã đặt giá trước đó vào đặt giá tiếp
    getOfferBidder: (id, Bidder) => db.loadOnePro(`select * from offerpro where ProID =${id} and Bidder = ${Bidder}`),
    //sản phẩm đang sell
    getSellingProduct: () => db.load(`select * from products where StatusID = 0 and StatusAcceptFromAdmin= 0`),
    //lịch sử ddasus giá
    getHisProduct: (id) => db.load(`select PricePlaceBid,TimePlace,f_Username from offerpro as o inner join member as m ON o.Bidder=m.f_ID where ProID = ${id}`),

    getTopTimeEnd: () => db.load(`SELECT p.*,count(*),pi.imgURL FROM products as p inner join proimage as pi on p.ProID = pi.ProID  group by(p.ProID) ORDER BY TimeEnd DESC limit 5 `),
    getTopValue: () => db.load(`SELECT p.*,count(*),pi.imgURL FROM products as p inner join proimage as pi on p.ProID = pi.ProID  group by(p.ProID) ORDER BY PriceBegin DESC limit 5 `),
    //Xóa
    del: id => db.delete(`delete from products where ProID = ${id}`),

    //Cập Nhật 
    patch: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        return db.patch('products', entity, condition);
    },
    updateStatusWinner: entity => {
        const condition1 = { ProID: entity.ProID };
        const condition2 = { Bidder: entity.Bidder };
        delete entity.ProID;
        delete entity.Bidder;
        return db.patchtwocondition('offerpro', entity, condition1, condition2);
    },

    updateStatusPro: entity => {
        const condition = { ProID: entity.ProID };
        delete entity.ProID;
        return db.patch('products', entity, condition);
    },

    //Đếm
    countByCat: async Item => {
        const rows = await db.load(`select count(*) as total from products where Item = ${Item} and StatusAcceptFromAdmin=0`);
        return rows[0].total;
    },
    pageByCat: (Item, offset) => db.load(`select p.*,count(*),pi.imgURL from products as p right join proimage as pi on p.ProID = pi.ProID  where Item = ${Item} group by(p.ProID) limit ${config.paginate.limit} offset ${offset}`),
    //     console.log(condition, entity);
    //     return db.patch('products',entity,condition);
    // },


    //cua admin
    //getProByID: id => db.load(`select p.*, d.* from products p, prodetails d where p.ProID = ${id} and d.ProID = ${id}`),
    getProByID: id => db.load(`select p.* from products p where p.ProID = ${id}`),
    getDetailByID: id => db.load(`select d.* from prodetails d where d.ProID = ${id} and d.Modified=0 ORDER BY d.DateWrite`),
    acceptPro: () => db.load('select p.*, m.f_Username from products p, member m where p.StatusAcceptFromAdmin = 1 and p.SellerID=m.f_ID'),
    acceptAddPro: id => {
        const condition = { ProID: id };
        const entity = { StatusAcceptFromAdmin: 0 }
        return db.patch('products', entity, condition);
    },
    NotAcceptAddPro: id => {
        const temp = db.del('prodetails', { ProID: id })
        console.log(temp);
        return db.del('products', { ProID: id })
    },
    getProEdit: () => db.load('SELECT d.*, p.ProName, m.f_Username FROM products p, prodetails d, member m WHERE d.Modified=1 AND d.ProID=p.ProID AND p.SellerID=m.f_ID ORDER BY d.DateWrite'),
    getModifyByID: id => db.load(`select d.* from prodetails d where d.ProDeID=${id}`),
    acceptEditPro: id => {
        const condition = { ProDeID: id };
        const entity = { Modified: 0 }
        return db.patch('prodetails', entity, condition);
    },
    NotAcceptEditPro: id => db.del('prodetails', { ProDeID: id }),
    numProAdd: _ => db.load('SELECT COUNT(ProID) as num_pro_need_add FROM products WHERE StatusAcceptFromAdmin=1'),
    numModifieds: _ => db.load('SELECT COUNT(d.ProDeID) as num_pro_modified FROM prodetails d, products p WHERE d.Modified=1 AND d.ProID=p.ProID'),

};
