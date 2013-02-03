function User(user) {
	// 用户bean
	this.accountName = user.accountName;
	this.name = user.name;
	this.password = user.password;
	this.emill = user.emill;
	this.sex = user.sex;
	this.qq = user.qq;
	this.mainPage = user.mainPage;
	this.interest = user.interest;
	this.manageLeve = user.manageLeve;
}

module.exports = User;

User.prototype.save = function(callback){
	
}