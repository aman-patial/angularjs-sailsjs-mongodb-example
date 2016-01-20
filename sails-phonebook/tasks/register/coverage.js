module.exports = function (grunt) {
	// Adding coverage task enabling "grunt coverage" command
	grunt.registerTask('coverage', [  
  		'mocha_istanbul:coverage'
	]);
};
