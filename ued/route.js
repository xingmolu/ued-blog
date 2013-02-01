var ued = require('./routes/ued');
var user = require('./routes/user');

module.exports = function(app) {
	//首页
	app.get('/',ued.index);
}