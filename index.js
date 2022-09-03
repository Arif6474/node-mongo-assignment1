const express = require("express");
const usersRoute = require("./route/v1/users.routes");
const app = express();
const port = 6000;

app.use(express.text());
app.use(express.json());

app.use("/api/v1/user", usersRoute);

app.get("/", (req, res) => {
  res.send("get api create");
});

app.listen(port, () => {
  console.log("listen to port", port);
});