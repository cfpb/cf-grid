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
      '/*                        _                                          \n' +
      '                         //\\                                         \n' +
      '                         V  \\                                        \n' +
      '                          \\  \\_                                      \n' +
      '            /$$$$$$        \\,".`.                                    \n' +
      '           /$$__  $$       |\\ `. `.                                  \n' +
      '  /$$$$$$$| $$  \\__//$$$$$$\\ \\  `. `-.                        _,.-:\\ \n' +
      ' /$$_____/| $$$$   /$$__  $$\\ \\   `.  `-._             __..--" "-";/ \n' +
      '| $$      | $$_/  | $$  | $$ \\ `.   `-.   `-..___..---"   _.--" ,"/  \n' +
      '| $$      | $$    | $$  | $$  `. `.    `-._        __..--"    ," /   \n' +
      '|  $$$$$$$| $$    | $$$$$$$/    `. `-_     ``--..""       _.-" ,"    \n' +
      ' \\_______/|__/    | $$____/       `-_ `-.___        __,--"   ,"      \n' +
      '                  | $$               `-.__  `----"""    __.-"        \n' +
      '                  | $$                    `--..____..--"             \n' +
      '                  |__/                                               \n\n' +
      '* <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n\n',

    /**
     * Recess: https://github.com/sindresorhus/grunt-recess
     * 
     * Compile, concat and compress LESS files.
     * Make sure to add any other CSS libraries/files you'll be using.
     * We are excluding minified files with the final ! pattern.
     */
    recess: {
      dist: {
        src: ['<%= banner %>', 'static/css/font-awesome.css', 'static/css/<%= pkg.name %>.css', '!static/css/*.min.css'],
        dest: 'static/css/<%= pkg.name %>.min.css',
        options: {
          compile: true,
          compress: true
        }
      }
    },

    /**
     * Watch: https://github.com/gruntjs/grunt-contrib-watch
     * 
     * Run predefined tasks whenever watched file patterns are added, changed or deleted.
     * Add files to monitor below.
     */
    watch: {
      gruntfile: {
        files: ['Gruntfile.js', '<%= recess.dist.src %>', '<%= uglify.dist.src %>', '<%= jasmine.options.specs %>'],
        tasks: ['default']
      }
    }
  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  /**
   * Create task aliases by registering new tasks
   */
  grunt.registerTask('test', ['jasmine']);

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['test', 'recess']);

};
