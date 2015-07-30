var express = require('express');
var router = express.Router();
var fs = require('fs')
var index = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('activity/1', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  res.render('activity/' + req.params.id, { title: 'Express' });
  fs.writeFile('log/vistor.txt', index++, function (err) {
      if (err) throw err;
      console.log('It\'s saved!'); //文件被保存
  });
});

module.exports = router;
