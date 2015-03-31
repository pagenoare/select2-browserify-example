module.exports = function(grunt) {
    var externalLibs = [
            'jquery',
            'underscore',
            'bootstrap'
        ],
        appendColon = function (el) {
            return el + ':';
        };

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        browserify: {
            vendor: {
                src: 'src/vendor.js',
                dest: './tmp_src/vendor.js',
                options: {
                    alias: externalLibs.map(appendColon)
                }
            },
            client: {
                src: [
                    "src/app.js",
                ],
                dest: './tmp_src/app.js',
                options: {
                    external: externalLibs
                }
            }
        },
        concat: {
          './public/bundle.js': [
              './tmp_src/vendor.js',
              './tmp_src/app.js'
          ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [ 'browserify', 'concat' ]);

};