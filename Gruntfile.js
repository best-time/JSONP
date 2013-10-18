/* jshint node: true */

module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['dist']
        },

        jshint: {
            gruntfile: {
                src: 'Gruntfile.js'
            },
            all: {
                src: ['dist/jsonp.js']
            }
        },

        uglify: {
            all: {
                src: ['dist/jsonp.js'],
                dest: 'dist/jsonp.min.js'
            }
        },

        coffee: {
            all: {
                files: {
                    'dist/jsonp.js': 'src/jsonp.coffee'
                }
            }
        },

        jasmine: {
            options: {
                specs: 'spec/*.js'
            },
            minified: {
                src: '<%= uglify.all.dest %>',
            },
            src: {
                src: 'dist/jsonp.js',
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['clean', 'coffee', 'jshint', 'uglify', 'jasmine']);
    grunt.registerTask('dist', ['clean', 'coffee', 'uglify']);
    grunt.registerTask('default', ['test', 'dist']);

};
