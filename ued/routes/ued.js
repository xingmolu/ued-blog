var config = require('../uedConfig').config;
/*
 * GET home page.
 */
var Test = require('../controller/Test');
exports.index = function(req, res){
  var password = config.encryption('3333221');
  console.log('password=='+password);
  console.log(config.eecryption(password.toString()));
  var test = {name:'ued-blog',password:password};
  var test = new Test(test);
  test.save(function(err,data){

  	console.log(err);
  	console.log(data);
  });
  res.render('index', { title: 'Express' });
};