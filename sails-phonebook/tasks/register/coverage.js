module.exports = function (grunt) {
	// Adding code coverage task enabling "grunt coverage" command
	grunt.registerTask('coverage', [  
  		'mocha_istanbul:coverage'
	]);
};
