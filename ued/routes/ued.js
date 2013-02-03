
/*
 * GET home page.
 */
var Test = require('../controller/Test');
exports.index = function(req, res){
  var test = {name:'ued-blog',password:'3333'};
  var test = new Test(test);
  test.save(function(err,data){

  	console.log(err);
  	console.log(data);
  });
  res.render('index', { title: 'Express' });
};