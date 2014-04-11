module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),
    version: Object.keys( grunt.file.readYAML('CHANGELOG') )[0],

    /**
     * Shell: https://github.com/sindresorhus/grunt-shell
     * 
     * Grunt task to run shell commands.
     * For now we're just copying the src file over to dist and
     * zipping the example directory.
     */
    shell: {
      packageExample: {
        command: [
          'cp src/ghost.less src/examples/grid/static/ghost.less',
          'cp src/ghost-legacy.less src/examples/grid/static/ghost-legacy.less',
          'cp src/boxsizing.htc src/examples/grid/static/boxsizing.htc',
          'cp src/boxsizing.htc dist/boxsizing.htc',
          'cd src/examples',
          'zip -r ../../dist/examples.zip . -x \*.DS_Store \*style.css'
        ].join('&&')
      }
    },

    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     */
    less: {
      legacy: {
        options: {
          paths: ["src"],
          yuicompress: false
        },
        files: {
          'dist/ghost.css': ['src/ghost-legacy.less'],
          'src/examples/grid/static/example.css': ['src/examples/grid/static/example.less']
        }
      }
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     * 
     * Concatenate files.
     */
    concat: {
      dist: {
        src: ['src/ghost.less'],
        dest: 'dist/ghost.less'
      }
    }

  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['less', 'shell', 'concat']);

};
