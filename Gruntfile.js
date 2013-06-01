module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Here's a banner with some template variables.
     * We'll be inserting it at the top of minified assets.
     */
    banner: 
      '/*                                      \n' +
      '            /$$$$$$          /$$        \n' +
      '           /$$__  $$        | $$        \n' +
      '  /$$$$$$$| $$  \\__//$$$$$$ | $$$$$$$  \n' +
      ' /$$_____/| $$$$   /$$__  $$| $$__  $$  \n' +
      '| $$      | $$_/  | $$  \\ $$| $$  \\ $$\n' +
      '| $$      | $$    | $$  | $$| $$  | $$  \n' +
      '|  $$$$$$$| $$    | $$$$$$$/| $$$$$$$/  \n' +
      ' \\_______/|__/    | $$____/ |_______/  \n' +
      '                  | $$                  \n' +
      '                  | $$                  \n' +
      '                  |__/                  \n\n' +
      '* <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n\n',

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
          'cp src/ghost.less src/examples/employee/static/ghost.less',
          'cp src/ghost.less src/examples/bootstrap/static/ghost.less',
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
      example1: {
        options: {
          paths: ["src"]
        },
        files: {
          "src/examples/employee/static/style.css": ["<%= banner %>", "src/examples/employee/static/example.less"]
        }
      },
      example2: {
        options: {
          paths: ["src"]
        },
        files: {
          "src/examples/bootstrap/static/style.css": "src/examples/bootstrap/static/example.less"
        }
      }
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     * 
     * Concatenate files.
     */
    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['src/ghost.less'],
        dest: 'dist/ghost.less'
      }
    },

    /**
     * Watch: https://github.com/gruntjs/grunt-contrib-watch
     * 
     * Run predefined tasks whenever watched file patterns are added, changed or deleted.
     * Add files to monitor below.
     */
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/ghost.less', 'src/examples/**/static/example.less'],
        tasks: ['default']
      }
    }
  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  /**
   * Create task aliases by registering new tasks
   */
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['shell', 'concat']);

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['less', 'build']);

};
