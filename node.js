//引入exprexx模块
var express = require("express");
var app = express();
app.use(express.static("public"));

//参数‘/’可当作设置url的根显示页面，这里即”http://localhost:3000/“访问的页面设置为index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html"); //设置/ 下访问文件位置
});

//设置端口3000访问地址，即http://localhost:3000
var server = app.listen(3000, () => {
  var port = server.address().port;
  console.log("【】访问地址http://localhost:%s", port);
});
