const mysql=require('mysql');
const util=require('util');
const config = require('../config/default.json');

const pool = mysql.createPool(config.mysql);
const mysql_query = util.promisify(pool.query).bind(pool);

module.exports={
    load: sql => mysql_query(sql),
    add:(tableName,entity)=>mysql_query(`insert into ${tableName} set ?`, entity),
    loadOnePro:sql=>mysql_query(sql),
    del: (tableName, condition) => mysql_query(`delete from ${tableName} where ?`, condition),
    //delete:sql=>mysql_query(sql),
    patch:(tableName,entity,condition)=>mysql_query(`update ${tableName} set ? where ?`,[entity,condition])
};