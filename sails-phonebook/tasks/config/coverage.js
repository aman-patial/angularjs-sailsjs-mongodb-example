/**
 * Test Coverage of exisitng code.
 * ---------------------------------------------------------------------
 *
 * This grunt task is configured to test the coverage of exisitng code in
 * sails project.
 *
 */
module.exports = function(grunt) {

	grunt.config.set('mocha_istanbul', {  
    coverage: {
    src: 'test/unit/', // the folder, not the files
    options: {
      coverageFolder: 'coverage',
      mask: '**/*.js',
      root: 'api/'
      }
    }
   });

	// Adds "grunt-mocha-istanbul" npm task
	grunt.loadNpmTasks('grunt-mocha-istanbul');
};






