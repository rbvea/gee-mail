module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'nested',
          sourceComments: 'map',
          sourceMap: 'app.css.map'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      },
      ionic: {
        options: {
          outputStyle: 'nested',
          sourceComments: 'map',
          sourceMap: 'ionic.css.map'
        },
        files: {
          'lib/css/ionic.css':'scss/ionic/ionic.scss'
        }
      } 
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass:dist', 'sass:ionic']);
  grunt.registerTask('ion', ['sass:ionic']);

  grunt.registerTask('default', ['build','watch']);
}
