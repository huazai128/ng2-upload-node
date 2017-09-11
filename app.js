const bodyParser = require("body-parser"); // 用于获取post听觉参数
const path = require("path");
const express = require("express");
require("app-module-path").addPath(__dirname + "/")

const mongodb = require("config/mongodb");
const routes = require("routes/index");
const app = express();

// 链接mongodb
mongodb.connect();

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);

app.listen("8080",() => {
    console.log("8080")
})