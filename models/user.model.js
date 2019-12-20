const db = require('../utils/db');

module.exports = {
  all: () => db.load("select * from member"),
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