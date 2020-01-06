const db = require('../utils/db');
const config=require('../config/default.json');

module.exports = {
  all: () => db.load("select * from member"),
  allUser: () => db.load("SELECT m.f_ID, m.f_Username, l.ten_loai FROM member m,loai_member l WHERE m.ID_loai_member!=3 AND m.ID_loai_member=l.id"),
  requestOfUsers: () => db.load("SELECT * FROM member WHERE f_UpgradeWaitStatus = 1"),
  allUserNames: async username => {
    const rows = await db.load(`select f_Username from member where f_Username='${username}'`);
    if (rows.length === 0) {
      return false;
    }
    return true;
  },
  
  //Lấy một user
  getUsername: id => db.load(`select f_Username from member where f_ID='${id}'`), 


//   single: id => db.load(`select * from member where f_Id = ${id}`),
  singleByUsername: async username => {
    const rows = await db.load(`select * from member where f_Username = '${username}'`);
    if (rows.length === 0)
      return null;
    return rows[0];
  },
  add: entity => db.add('member', entity),
  //del: id => db.del('member', { f_ID: id }),
  acceptUp: id => {
    const condition = { f_ID: id };
    const entity = { f_UpgradeWaitStatus: 0, ID_loai_member: config.IDTypeMember.Seller }
    return db.patch('member', entity, condition);
  },
  numUserUpgrade: _ => db.load('SELECT COUNT(f_ID) as num_user_need_upgrade FROM member WHERE f_UpgradeWaitStatus=1'),
  getProfileByID: id => db.load(`SELECT m.* FROM member m WHERE m.f_ID=${id}`),
  getEvaluateByID: id => db.load(`SELECT e.* FROM evaluate e WHERE e.UserID=${id}`),
  patch: entity => {
    const condition = { f_ID: entity.f_ID };
    delete entity.f_ID;
    console.log(condition, entity);
    return db.patch('member',entity,condition);
},
};