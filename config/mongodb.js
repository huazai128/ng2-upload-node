const mongoose = require("mongoose");
mongoose.Promise =  require("bluebird");

exports.mongoose = mongoose;

exports.connect = () => {
    // 连接mongodb数据库
    mongoose.connect("mongodb://localhost/upload");
    mongoose.connection.on("error",(err) => {
        console.log("链接数据库失败",err)
    });
    mongoose.connection.once("open",() => {
        console.log("链接成功")
    })
    return mongoose;
}