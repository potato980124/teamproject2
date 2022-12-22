var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bfoc",
    multipleStatements: true,
});
function writeNotice_event(title, writer, category, password, content, callback) {
    connection.query(
        `INSERT INTO notice_event(create_time, title, writer, category, password, content) values (NOW(),'${title}','${writer}','${category}',${password},'${content}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
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
    connection.query("SELECT * FROM notice ORDER BY id;" + "SELECT * FROM notice_event ORDER BY id;", (err, rows) => {
        if (err) throw err;
        let rows1 = rows[0];
        let rows2 = rows[1];
        callback(rows1, rows2);
    });
}
function getNoticeByid(id, callback) {
    //한줄을 다 불러올때는 from + 'table 이름" + 없음
    connection.query(`SELECT * FROM notice where id='${id}'`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}
//아이디가 일치하는 부분을 update할 내용 내보내기
function modify_N(id, callback) {
    connection.query(`SELECT * FROM notice where id=${id}`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}

//아이디가 일치하는 부분을 update한 내용 내보내기
function updateNotice(id, title, writer, category, password, content, callback) {
    console.log("db" + id);
    connection.query(
        `UPDATE notice set create_time=now(),title='${title}',writer='${writer}',category='${category}',password=${password},content='${content}' where id=${id}`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//아이디가 일치하면 삭제하기
function deleteNotice(id, callback) {
    connection.query(`DELETE from notice WHERE id=${id}`, (err) => {
        if (err) throw err;
        callback();
    });
}
// 회원가입 내용 db에 전달 해주는 함수
function insertIntoJoinTable(id, pw, name, birth, email, callback) {
    connection.query(
        `insert into jointable(create_time,id,pw,name,birth,mail)values(now(),'${id}','${pw}','${name}','${birth}','${email}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
// 회원가입테이블 id 가져오는 함수
function getJointable(callback) {
    connection.query(`select id from jointable`, (err, ids) => {
        if (err) throw err;
        callback(ids);
    });
}
//로그인 정보 확인 함수
function loginCheck(id, pw, callback) {
    connection.query(`select * from jointable where id ='${id}' and pw = '${pw}'`, (err, results) => {
        if (err) throw err;
        callback(results);
    });
}


//뉴스 데이터 테스트
function getnews(callback) {
    connection.query("SELECT * FROM news ORDER BY id", (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}
function writenews(img, name, content, category, callback) {
    connection.query(
        `INSERT INTO news(create_time, newsimg, writer, content, category) values (NOW(),'${img}','${name}','${content}','${category}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
module.exports = {
    writeNotice,
    getNotice,
    getNoticeByid,
    insertIntoJoinTable,
    getJointable,
    loginCheck,
    writeNotice_event,
    modify_N,
    updateNotice,
    deleteNotice,
};
