var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bfoc",
});
function writeNotice(title, writer, category, password, content, callback) {
    connection.query(
        `INSERT INTO notice(create_time, title, writer, category, password, content) values (NOW(),'${title}','${writer}','${category}',${password},'${content}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
function getNotice(callback) {
    connection.query("SELECT * FROM notice ORDER BY id desc", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
function getNoticeByid(id, callback) {
    //한줄을 다 불러올때는 from + 'table 이름" + 없음
    connection.query(`SELECT * FROM notice where id=${id}`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}
module.exports = {
    writeNotice,
    getNotice,
    getNoticeByid,
};
