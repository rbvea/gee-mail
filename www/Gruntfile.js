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

    jslint: {
      app : {
        options : {
          errorsOnly: true
        },
        src: ['js/*.js'],
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      jslint: {
        files: ['app/js/*.js'],
        tasks:['jslint']
      },
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jslint', 'sass:dist']);
  grunt.registerTask('ion', ['sass:ionic']);

  grunt.registerTask('default', ['build','watch']);
}
