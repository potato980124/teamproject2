const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "database-2.cnhgeyew7wkq.ap-northeast-1.rds.amazonaws.com",
    user: "admin",
    password: "xlavmf12",
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
// function getData_main(callback) {
//     connection.query("SELECT date_format(create_time, '%y:%c:%e') as time ,title, category FROM notice ORDER BY id;", (err, rows) => {
//         if (err) throw err;
//         let rows3 = rows[0];
//         callback(rows3);
//     });
// }
function getNotice(callback) {
    connection.query(
        "SELECT  date_format(create_time, '%y.%c.%e') as time ,title, writer, category, password, content, id FROM notice ORDER BY id;" +
            "SELECT  date_format(create_time, '%y.%c.%e') as time, title, writer, category, password, content, id FROM notice_event ORDER BY id;",
        (err, rows) => {
            if (err) throw err;
            let rows1 = rows[0];
            let rows2 = rows[1];
            callback(rows1, rows2);
        }
    );
}
function getNoticeByid(id, callback) {
    connection.query(
        `SELECT date_format(create_time, '%y 년 %c 월 %e 일') as time ,title, writer, category, password, content, id FROM notice where id=${id}`,
        (err, row) => {
            if (err) throw err;
            callback(row);
        }
    );
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

//이벤트 테이블에 넣어주는 함수
function insertIntoEvent(writer, pw, category, title, content, eventimg, callback) {
    connection.query(
        `insert into eventtable(create_time,writer,pw,category,title,content,eventimg)values(now(),'${writer}','${pw}','${category}','${title}','${content}','${eventimg}')`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
// 이벤트 테이블에서 데이터 가져오는 함수
function getEvent(callback) {
    connection.query(
        `select * from eventtable where category ='부산항 축제';` +
            `select * from eventtable where category ='유채꽃 축제';` +
            `select * from eventtable where category ='부산 불꽃 축제';` +
            `select * from eventtable where category ='국제 록 페스티벌';` +
            `select * from eventtable where category ='부산 바다축제';` +
            `select * from eventtable where category ='골목길 축제';` +
            `select * from eventtable where category ='시민의 종 타종식';`,
        (err, rows) => {
            if (err) throw err;
            let havors = rows[0];
            let flowers = rows[1];
            let fires = rows[2];
            let rocks = rows[3];
            let seas = rows[4];
            let citys = rows[5];
            let rings = rows[6];
            callback(havors, flowers, fires, rocks, seas, citys, rings);
        }
    );
}
//이벤트 세부페이지 데이터 값 가져올 함수
function getEventById(id,callback){
    connection.query(`select * from eventtable where id = '${id}'`,(err,row)=>{
        if(err) throw err;
        callback(row);
    })
}
//이벤트 삭제 해줄 함수
function deleteEvent(id, callback) {
    connection.query(`DELETE from eventtable WHERE id=${id}`, (err) => {
        if (err) throw err;
        callback();
    });
}
//이벤트 수정페이지에 보여줄 테이블 정보 함수 
function modify_E(id, callback) {
    connection.query(`SELECT * FROM eventtable where id=${id}`, (err, row) => {
        if (err) throw err;
        callback(row);
    });
}
//이벤트 아이디가 일치하는 부분을 update
function updateEvent(id,writer,pw,category,title,content,eventimg,callback) {
    connection.query(
        `UPDATE eventtable set create_time=NOW(),title='${title}',writer='${writer}',category='${category}',pw=${pw},content='${content}',eventimg ='${eventimg}' where id='${id}'`,
        (err) => {
            if (err) throw err;
            callback();
        }
    );
}
//뉴스 데이터 테스트
function getnews(callback) {
    connection.query("SELECT * FROM news ORDER BY id desc", (err, rows, fields) => {
        if (err) throw err;
        callback(rows);
    });
}
function writenews(img, name, title, pw, content, category, callback) {
    connection.query(
        `INSERT INTO news(create_time, newsimg, writer, title, password, content, category) values (NOW(),'${img}','${name}','${title}','${pw}','${content}','${category}')`,
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
    insertIntoEvent,
    getEvent,
    getEventById,
    modify_N,
    updateNotice,
    deleteNotice,
    getnews,
    writenews,
    deleteEvent,
    modify_E,
    updateEvent,
    // getData_main,
};
