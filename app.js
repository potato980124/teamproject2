//npm에서 다운받은 애들 정리하는 곳
// const express = require("express");
// const routers = require("./routes/route"); //routes란 폴더안에 route라는 파일을 사용하겠디.

const express = require("express");
const routers = require("./routes/route");
const expressLayout = require("express-ejs-layouts"),
    app = express();
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// basically tells the system whether you want to use a simple algorithm for shallow parsing
//->false: only can parse strings or array(shallow) / true: can parse nested objects(deeper)
app.use(bodyParser.json()); //basically tells you want json to be used

app.set("views", path.join(__dirname, "views")); //views 안에 들어있는 애들 (html을) 사용하겠다
app.set("view engine", "ejs"); //EJS 사용

// //아래는 뭔가를 사용하겠다는 구문
app.use(expressLayout); //??express ejs의  layout을 사용하겠다
app.use("/", routers);
app.use(express.static(path.join(__dirname, "public"))); //express안의 static을 사용해서 public안의 것들을 사용하겠다(static은 정적인 애들 like css을 읽어주는 program)

module.exports = app; //app이라는 이름으로 모듈화 시켜서 내보내겠다
