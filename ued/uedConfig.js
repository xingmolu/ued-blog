//ued config
var path = requrie('path');

exports.config = {
	debug : true,
	name : 'UED blog',
	description : 'UED blog',
	version : '0.01',

	site_logo : '',
	upload_dir : path.join(__pathname,'public','user_data','images'),

	//db配置
	db : 'mongodb://127.0.0.1:25017/uedBlog',
	session_secret : 'ued_blog',
	auth_cookie_name : 'ued_blog',
	port : 25017,

	//显示blog条数
	list_topic_count : 10,

	
};