/**
 * Created by gwenpaul on 2/21/16.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: 'client/client.js'
        },
        watch: {
            scripts: {
                files: 'client/client.js',
                tasks: ['uglify', 'jshint'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            build: {
                src: 'client/client.js',
                dest: 'server/public/assets/scripts/client.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendor/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/dist/css/",
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": "server/public/vendor/bootstrap/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};