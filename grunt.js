module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		test: {
			files: ['test/**/*.js']
		},
		lint: {
			files: ['app.js', 'grunt.js', 'test/**/*.js']
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'default'
		},
		jshint: {
			options: {
				curly: false,
				strict: false,
				eqeqeq: true,
				immed: true,
				latedef: false,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true
			},
			globals: {
				exports: true
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint test');

};