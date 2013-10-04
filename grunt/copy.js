module.exports = {
    main: {
        files: [
                {
                expand: true,
                cwd: 'lib/',
                src: ['<%= pkg.name %>.min.js'],
                dest: 'builds/',
                filter: 'isFile',
                    rename: function(dest, src) {
                        return dest + src.replace('.min.js', '.<%= pkg.version %>.min.js');
                    }
                }
        ],
    },

    // copy relevant vendor files to lib directory (vendor directory is only temporary)s
    update: {
        files: [
                //jQuery
                {
                expand: true,
                cwd: 'bower_components/jquery/',
                src: ['jquery.min.js'],
                dest: 'lib/vendors/'
                },
                //font-awesome
                {
                expand: true,
                cwd: 'bower_components/font-awesome/css/',
                src: ['font-awesome.min.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/font-awesome/font/',
                src: ['fontawesome-webfont.woff'],
                dest: 'lib/font/'
                },
                //bootstrap
                {
                expand: true,
                cwd: 'bower_components/bootstrap/docs/assets/js/',
                src: ['bootstrap.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap/docs/assets/css/',
                src: ['bootstrap-responsive.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap/docs/assets/css/',
                src: ['bootstrap.css'],
                dest: 'lib/vendors/'
                },
                //underscore
                {
                expand: true,
                cwd: 'bower_components/underscore/',
                src: ['underscore-min.js'],
                dest: 'lib/vendors/'
                },
                //require.js
                {
                expand: true,
                cwd: 'bower_components/requirejs/',
                src: ['require.js'],
                dest: 'lib/vendors/'
                }
        ]
    },
    website: {
        files: [
                {
                expand: true,
                src: ['lib/**'],
                dest: 'builds/website/'
                },
                {
                expand: true,
                src: ['img/*'],
                dest: 'builds/website/'
                },
                {
                expand: true,
                src: ['*.html'],
                dest: 'builds/website/'
                }
        ]
    }

};
