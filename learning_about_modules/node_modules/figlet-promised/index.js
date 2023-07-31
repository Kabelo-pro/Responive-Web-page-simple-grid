const figlet = require("figlet");
module.exports = function(text) {

	if (arguments.length > 1) {
		throw new Error("figlet-promised only take 1 parameter: the text to be processed")
	}

	return new Promise(function(resolve, reject){
		figlet(text, function(err, result){
			if (err){
				return reject(err);
			}
			resolve(result);
		})
	})
}