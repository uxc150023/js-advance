let express = require("express");
app = express();
app.listen(3001, () => {
  console.log("--->", 3001);
});
app.get("/list", function (req, res) {
  let { callback = Function.prototype } = req.query;
  let data = {
    code: 0,
    message: "success",
  };
  // res.send(data);
  res.send(`${callback}(${JSON.stringify(data)})`);
});
