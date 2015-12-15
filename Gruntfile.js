module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        pkg: pkg,

        jshint:  require('./grunt/jshint.js'),
        clean: require('./grunt/clean.js'),
        concat: require('./grunt/concat.js'),
        copy: require('./grunt/copy.js'),
        htmlmin: require('./grunt/htmlmin.js'),
        uglify: require('./grunt/uglify.js'),
        watch: {
            files: '<%= jshint.files %>',
            tasks: 'jshint'
        }
    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //after installing latest shit with bower run this task to copy relevant files to lib
    grunt.registerTask('build:libs', ['clean:libs', 'copy:update']);

    // is called without any further parameter.
    //grunt.registerTask('default', ['jshint', 'concat:build']);
    grunt.registerTask('default', [
            'jshint',
            'clean:website',
            'copy',
            'copy:website',
            'htmlmin'
        ]
    );
};
