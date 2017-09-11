const Image = require("modules/images");
const path = require("path");
const multer = require("multer");


let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/upload"); // 路径要对 不然获取不到
    },
    filename:function(req,file,cb){
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'));
		cb(null, Date.now() + ext);
    }
})

let upload = multer({
    storage:storage
})

exports.post = (req,res) => {
    // console.log(req); 包含请求信息
    upload.single("file")(req,res,(err) => {
        if(req.file.filename){
            let img = new Image();
            img.url = req.file.filename;
            img.save((err,image) => {
                if(err){
                    console.log(err);
                    res.jsonp({
                        msgCode: 0,
                        message:"上传失败"
                    })
                }else{
                    let path = req.file.path.substring(req.file.path.indexOf('/'))
                    res.jsonp({
                        msgCode:1,
                        message:"上传成功",
                        path:"http://localhost:8080" + path
                    })  
                    }
                
            })
        }
    })
};

