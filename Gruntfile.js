module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
          includePaths: ['bower_components/foundation/scss'],
	  sourceMap: true,
	  debugInfo: true,
      },
      dist: {
        options: {
          outputStyle: 'neasted'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

      postcss: {
	  options: {
	      processors: [
		  require('autoprefixer-core')({ browsers: ['last 2 version'] }).postcss
	      ]
	  },
	  dist: {src: 'css/*.css' }
      },
      
      watch: {
	  grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
