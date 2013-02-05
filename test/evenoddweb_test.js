exports['evenoddweb'] = {
	'time is an even number': function (test) {
		test.strictEqual((new Date()).getTime()%2, 0, 'time should be an even number');
		test.done();
	}
};