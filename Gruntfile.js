module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['scss/**/*.{scss,sass}','scss/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist','cssmin:minify']
      }
    },
    sass: {
      dist: {
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', [
      'cssmin:minify'
  ]);

  grunt.registerTask('default', [
      'watch',
      'build'
  ]);
};