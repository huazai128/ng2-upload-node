const image = require("controllers/images");


const routes = (app) => {
    console.log("dadasd")
    app.all("*",(req,res,next) => {
        res.setHeader("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Headers', 'Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With');
        res.header('Access-Control-Allow-Methods', 'PUT,PATCH,POST,GET,DELETE,OPTIONS'); // 请求方法
        res.header('Content-Type', 'application/json;charset=utf-8');
        res.header('X-Powered-By', 'Nodepress 1.0.0');
        next();
    });
    console.log("进来了");
    app.all("/",(req,res) => {
        res.jsonp({
            message:"获取成功"
        })
    });
    app.post("/images",image.post);
}
module.exports = routes;