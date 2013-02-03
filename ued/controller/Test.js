//数据库测试类。
var mongodb = require('../node_modules/db');
var Test = function (test) {
	// body...
	this.name = test.name;
	this.password = test.password;

}

module.exports = Test;

Test.prototype.save = function(callback){
	var self = this;
	console.log(self);
	var test = {name:self.name,password:self.password};
	mongodb.open(function(err,db){

		if(err){
			console.log('数据库打开失败');
			return callback(err);
		}
		//读取user集合
		db.collection('test',function(err,coll){
			if(err){
				mongodb.close();
				console.log('读取test集合失败');
				return callback(err);
			}
			//为name键添加索引
			coll.ensureIndex('name',{unique: true});
			//写入user文档
			
			coll.insert(self,{sefe:true},function(err,user){
				mongodb.close();
				callback(err,user);
			});
		});
	});
}