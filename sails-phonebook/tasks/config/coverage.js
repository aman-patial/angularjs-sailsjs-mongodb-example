/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
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






