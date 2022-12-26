//실행시켜주는 애
let app = require("../app");
let PORT = 5500;
app.listen(process.env.PORT || PORT);
