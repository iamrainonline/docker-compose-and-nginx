const express = require("express");
const app = express();

const replicaApp = process.env.APP_NAME;

const path = require("path");
const PORT = process.env.PORT || 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("request served by", replicaApp);
});

app.listen(PORT, () => {
  console.log(`${replicaApp} server is running on port ${PORT}`);
});
