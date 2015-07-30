var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('activity/1', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  res.render('activity/' + req.params.id, { title: 'Express' });
});

module.exports = router;
