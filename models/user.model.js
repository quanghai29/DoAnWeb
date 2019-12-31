const db = require('../utils/db');

module.exports = {
  all: () => db.load("select * from member"),
  allUser: () => db.load("SELECT m.f_ID, m.f_Username, l.ten_loai FROM member m,loai_member l WHERE m.ID_loai_member!=3 AND m.ID_loai_member=l.id"),
  allUserNames: async username => {
    const rows = await db.load(`select f_Username from member where f_Username='${username}'`);
    if (rows.length === 0) {
      return false;
    }
    return true;
  },
  //   single: id => db.load(`select * from member where f_Id = ${id}`),
  singleByUsername: async username => {
    const rows = await db.load(`select * from member where f_Username = '${username}'`);
    if (rows.length === 0)
      return null;
    return rows[0];
  },
  add: entity => db.add('member', entity),
  //del: id => db.del('member', { f_ID: id }),
};