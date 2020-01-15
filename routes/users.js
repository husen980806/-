var express = require('express');
var router = express.Router();
var mongo=require("./dbfengzhuang.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/add",function(req,res){
	mongo("find","lists",{},function  (result) {
		res.send(result)
	})
})
module.exports = router;
