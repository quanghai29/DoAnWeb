const mysql=require('mysql');
const util=require('util');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'auctionsellweb'
});

const mysql_query = util.promisify(pool.query).bind(pool);

module.exports={
    load: sql => mysql_query(sql),
    add:(tableName,entity)=>mysql_query(`insert into ${tableName} set ?`, entity),
    loadOnePro:sql=>mysql_query(sql),
    delete:sql=>mysql_query(sql),
    patch:(tableName,entity,condition)=>mysql_query(`update ${tableName} set ? where ?`,[entity,condition])
};