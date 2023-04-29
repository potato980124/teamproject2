//page 연결이 쉬워지도록
//
const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const db = require("./../db.js");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, "../public/uploads/");
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); //파일의 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 날짜 + 확장자명
        },
    }),
    limits: {
        fileSize: 1024 * 1024 * 9,
    }, //2메가까지 업로드 가능
});
//notice=====================================
router.get("/", (req, res) => {
    db.getNotice((rows1) => {
        res.render("main", { rows1: rows1 });
    });
});
// router.get("/notice_list", (req, res) => {
//     db.getNotice((rows) => {
//         res.render("notice_list", { rows: rows }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
//     });
// });
router.get("/notice_list", (req, res) => {
    db.getNotice((rows1, rows2) => {
        res.render("notice_list", {
            rows1: rows1,
            rows2: rows2,
        }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
router.get("/notice_write", (req, res) => {
    res.render("notice_write");
});
router.post("/w_notice", upload.single("noticeimg"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let title = param["title"];
    let writer = param["writer"];
    let category = param["category"];
    let categorycolor = param["category_color"];
    let password = param["password"];
    let content = param["content"];
    let noticeimg = "";
    if(!req.file){
        noticeimg += "";
    }else{
        noticeimg += "uploads/" + req.file.filename;
    }
    db.writeNotice(title, writer, category, categorycolor, password, content, noticeimg, () => {
        res.redirect("/notice_list");
    });
});
router.get("/notice_detail", (req, res) => {
    let id = req.query.id;
    console.log(id);
    db.getNoticeByid(id, (row) => {
        res.render("notice_content", {
            row: row[0],
        }); //테이블의 한 행만 보내줄거기 때문에
    });
});
router.get("/deleteNotice",(req,res)=> {
    let id = req.query.id;
    db.deleteNotice(id,()=>{
        res.redirect("notice_list")
    })
})
//notice===NEWS 섹션====================================

router.get("/notice_write_event", (req, res) => {
    res.render("notice_write_event");
});
router.post("/w_notice_event", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let title = param["title"];
    let writer = param["writer"];
    let category = param["category"];
    let categorycolor = param["category_color"];
    let password = param["password"];
    let content = param["content"];
    let img = param["img"];

    db.writeNotice_event(title, writer, category, categorycolor, password, content, img, () => {
        res.redirect("/notice_list");
    });
});

//modify

router.get("/modifyNotice", (req, res) => {
    let id = req.query.id;
    db.modify_N(id, (row) => {
        res.render("notice_modify", { row: row[0] });
    });
});
router.post("/m_notice", (req, res) => {
    // let param = JSON.parse(JSON.stringify(req.body));
    // let id = param["id"];
    // let title = param["title"];
    // let writer = param["writer"];
    // let category = param["category"];
    // let password = param["password"];
    // let content = param["content"];
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let title = param["title"];
    let writer = param["writer"];
    let category = param["category"];
    let categorycolor = param["category_color"];
    let password = param["password"];
    let content = param["content"];
    let img = param["img"];
    console.log(title);
    db.updateNotice(id, title, categorycolor, writer, category, password, content,img, () => {
        res.redirect("/notice_list"); //redirect 에는 / 붙인다
    });
});
//==============================================
router.get("/committee", (req, res) => {
    res.render("committee");
});
router.get("/festival", (req, res) => {
    res.render("festival");
});
router.get("/port_festival", (req, res) => {
    res.render("festival_port");
});
router.get("/sea_festival", (req, res) => {
    res.render("festival_sea");
});
router.get("/road_festival", (req, res) => {
    res.render("festival_road");
});
router.get("/fireworks", (req, res) => {
    res.render("festival_fire");
});
router.get("/rock_festival", (req, res) => {
    res.render("festival_rock");
});
router.get("/flower_festival", (req, res) => {
    res.render("festival_flower");
});

router.post("/insert_reserve", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let festival = param["festival"];
    let date = param["date"];
    let time = param["time"];
    let name = param["name"];
    let phone = param["phone"];
    db.insertReservation(festival, date, time, name, phone, () => {
        res.redirect("/reservation");
    });
});
router.get("/reservation", (req, res) => {
    let id = req.query.id;
    db.getReserveById(id, (row) => {
        res.render("reservation", {
            row: row[0],
        }); //테이블의 한 행만 보내줄거기 때문에
    });
});
//---이벤트 페이지---
router.get("/event", (req, res) => {
    db.getEvent((havors, flowers, fires, rocks, seas, citys, rings) => {
        res.render("event", {
            havors: havors,
            flowers: flowers,
            fires: fires,
            rocks: rocks,
            seas: seas,
            citys: citys,
            rings: rings,
        });
    });
});
// 이벤트 등록 페이지

router.get("/eventwrite", (req, res) => {
    res.render("event_write");
});
router.post("/w_event", upload.single("eventimg"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let writer = param["name"];
    let pw = param["password"];
    let category = param["category"];
    let title = param["title"];
    let content = param["content"];
    let eventimg = "uploads/" + req.file.filename;
    db.insertIntoEvent(writer, pw, category, title, content, eventimg, () => {
        res.redirect("/event");
    });
});
//이벤트 세부 페이지
router.get("/event_content", (req, res) => {
    let id = req.query.id;
    db.getEventById(id, (row) => {
        res.render("event_content", { row: row[0] });
    });
});
// 이벤트 세부 삭제 버튼
router.get("/delete_event", (req, res) => {
    let id = req.query.id;
    db.deleteEvent(id, () => {
        res.redirect("/event");
    });
});
//이벤트 수정 페이지
router.get("/modify_event", (req, res) => {
    let id = req.query.id;
    db.modify_E(id, (row) => {
        res.render("event_modify", { row: row[0] });
    });
});
//이벤트 수정 포스트
router.post("/modify_e", upload.single("eventimg"), (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let writer = param["name"];
    let pw = param["password"];
    let category = param["category"];
    let title = param["title"];
    let content = param["content"];
    let eventimg = "uploads/" + req.file.filename;
    db.updateEvent(id, writer, pw, category, title, content, eventimg, () => {
        res.redirect("/event");
    });
});
router.post("/event_comment_write", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let password = param["password"];
    let content = param["content"];
    console.log(content);

    db.writeComment(id, password, content, () => {
        res.redirect("/luckybox");
    });
});
router.get("/luckybox", (req, res) => {
    db.getComment((rows) => {
        res.render("luckybox", {
            rows: rows,
        }); //ejs의 rows를 받아서 rows라는 이름으로 보낸다
    });
});
//---갤러리---
router.get("/gallery", (req, res) => {
    res.render("gallery");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/loginCheck", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["pw"];
    db.loginCheck(id, pw, (results) => {
        if (results.length > 0) {
            res.redirect("/");
        } else {
            res.send(`<script>alert('로그인정보가 일치하지 않습니다'); document.location.href="/login";</script>`);
        }
    });
});
router.get("/join", (req, res) => {
    db.getJointable((ids) => {
        res.render("join", {
            ids: ids,
        });
    });
});
router.post("/joininfo", (req, res) => {
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param["id"];
    let pw = param["pw"];
    let name = param["name"];
    let birth = param["birth"];
    let email = param["email"];
    db.insertIntoJoinTable(id, pw, name, birth, email, () => {
        res.redirect("/login");
    });
});

router.get("/test", (req, res) => {
    res.render("test");
});

//뉴스 페이지

// router.get("/news_write", (req, res) => {
//     res.render("news_write");
// });

// router.post("/w_news", upload.single("news_img"), (req, res) => {
//     //const에서 선언해준 upload
//     let param = JSON.parse(JSON.stringify(req.body));
//     let img = "uploads/" + req.file.filename;
//     let title = param["news_title"];
//     let name = param["news_name"];
//     let content = param["news_content"];
//     let category = param["category"];
//     let pw = param["password"];
//     db.writenews(img, name, title, pw, content, category, () => {
//         res.redirect("/news_list");
//     })

// });
// router.get("/news_list", (req, res) => {
//     db.getnews((rows) => {
//         res.render("news_list", { rows: rows });
//     })
// });

module.exports = router;
