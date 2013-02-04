var util = require('../controller/util').util;
/*
 * GET home page.
 */
var Test = require('../controller/Test');
exports.index = function(req, res){
  var password = util.encrypt('3333221');
  console.log('password=='+password);
  console.log(util.decrypt(password.toString()));
  var test = {name:'ued-blog',password:password};
  var test = new Test(test);
  test.save(function(err,data){

  	console.log(err);
  	console.log(data);
  });
  res.render('index', { 
      title: 'UED微博',
      layout:'layout',
      user: req.session.name
     });
};