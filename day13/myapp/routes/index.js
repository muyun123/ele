var express = require('express');
var router = express.Router();
var db = require('../db/mong')
/* GET home page. */
router.get('/grid', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = await db.find('element');
  res.send(JSON.stringify(data));

});
router.get('/card', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = await db.find('eleinf');
  res.send(JSON.stringify(data));
});
router.get('/oldorders', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = await db.find('orderr');
  res.send(JSON.stringify(data));
});
router.get('/sear', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = await db.find('shop');
  // console.log(req.query);
  var c = [];
  for (var i of data) {
    for (var j of i.foods) {
      if (j.name.search(req.query.val) != -1) {
        c.push(i);
        break;
      }
    }
  }
  res.json(c);
});
router.get('/detail/', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var data = await db.find('eleinf', req.query);
  // console.log(data);
  res.send(JSON.stringify(data));
});
module.exports = router;