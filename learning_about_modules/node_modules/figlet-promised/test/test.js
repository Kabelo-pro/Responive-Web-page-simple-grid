const figlet = require("../index");
const assert = require("assert");

describe("Promised Figlet", function() {

	it("should work with a promise", function(done){
		figlet("fig").then(function(result){
			const expected = "   __ _       \n  / _(_) __ _ \n | |_| |/ _` |\n |  _| | (_| |\n |_| |_|\\__, |\n        |___/ ";
			assert.equal(expected, result)
			done();
		});
	});

	it("should work with async await", async function(){
		const expected = "   __ _       \n  / _(_) __ _ \n | |_| |/ _` |\n |  _| | (_| |\n |_| |_|\\__, |\n        |___/ ";
		const result = await figlet("fig");
		assert.equal(expected, result)
	});


})