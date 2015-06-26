module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            'default': {
                files: { './css/style.css' : './less/style.less' }
            },
            min: {
                options: {
                    compress: true
                },
                files: { './css/style.min.css' : './less/style.less' }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            'default': {
                files: ['./less/*.less', './index.html'],
                tasks: ['less:default']
            }
        },

        connect: {
            'default': {
                options: {
                    port: 3333,
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['less', 'connect', 'watch']);
}




















