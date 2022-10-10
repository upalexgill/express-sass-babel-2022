const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();
const privateKey  = fs.readFileSync("sslcert/server.key", "utf8");
const certificate = fs.readFileSync("sslcert/server.crt", "utf8");
const credentials = {key: privateKey, cert: certificate};
const favicon = require("serve-favicon");

app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/images/favicon.ico"));

https
  .createServer(credentials, app)
  .listen(4000, () => {
    console.log("Server is running on port 4000");
  });

app.get('/', (req,res) => {
  res.send("Hello from express server.");
});
