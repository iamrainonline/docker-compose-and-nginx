const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log("request served by node app");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
