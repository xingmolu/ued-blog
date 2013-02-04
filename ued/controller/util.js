var config = require('../uedConfig').config;
var crypto = require('crypto');

exports.util = {

	//加密方法
	encrypt : function(str) {
	    var cipher = crypto.createCipher('aes192', config.crypt);
	    var enc = cipher.update(str,'utf8','hex');
	    enc += cipher.final('hex');
	    return enc;
	},
	//解密方法
	decrypt : function(str) {
	    var decipher = crypto.createDecipher('aes192', config.crypt);
	    var dec = decipher.update(str,'hex','utf8');
	    dec += decipher.final('utf8');
	    return dec;
	}
}
	