//ued config
var path = require('path');

exports.config = {
	debug : true,
	name : 'UED blog',
	description : 'UED blog',
	version : '0.01',

	site_logo : '',
	upload_dir : path.join(__dirname,'public','user_data','images'),

	//db配置
	dbHost : '127.0.0.1:25017',
	dbName : 'uedBlog',
	dbport : 25017,
	session_secret : 'ued_blog',
	auth_cookie_name : 'ued_blog',
	

	//显示blog条数
	list_topic_count : 10,

	
};