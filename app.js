var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var formidable = require("formidable");
var _ = require("underscore");

//静态化src文件夹，就相当于给src文件的所有文件开了路由
app.use(express.static("src"));

// 设置服务器跨域权限
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

//路由表
app.get("/",function(req,res){
    res.json({})
})
//切换页码
app.post("/changePage" ,function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // console.log("页码",fields.page);
        var page = fields.page;
        fs.readFile("./src/api/searchData.json",function(err,data){
            if(err){
                console.log("读取searchData文件出错");
                return ;
            }
            var dataList = data.toString();
            dataList = JSON.parse(dataList).order_list;
            var arr = dataList.slice((page-1)*2,page*2)
            // console.log(dataList.length);
            // console.log(dataList)
            res.json({results:arr });
        })

    })
});










app.listen(3000,function(){

    console.log("运行在了3000");
});

