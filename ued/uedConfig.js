//ued config
var path = require('path');
var crypto = require('crypto');

exports.config = {
	debug : true,
	name : 'UED blog',
	description : 'UED blog',
	version : '0.01',

	site_logo : '',
	upload_dir : path.join(__dirname,'public','user_data','images'),

	//db配置
	dbHost : '127.0.0.1',
	dbName : 'uedBlog',
	dbport : 25017,
	session_secret : 'ued_blog',
	auth_cookie_name : 'ued_blog',
	
	//加密方法
	encryption : function(data){
		return crypto.createHash('sha256').update(data);
	},
	//解密方法
	eecryption : function(data){
		return crypto.createVerify('sha256').update(data);
	},

	//显示blog条数
	list_topic_count : 10,

	
};