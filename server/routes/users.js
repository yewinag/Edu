var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('User').find({},function(res,rows){
    console.log(rows)
  })
});
router.post('/',function(req,res,next){
  console.log(req)
  console.log(res)
})

module.exports = router;
