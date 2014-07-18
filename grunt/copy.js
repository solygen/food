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
                cwd: 'components/jquery/',
                src: ['jquery.min.js'],
                dest: 'lib/vendors/'
                },
                //font-awesome
                {
                expand: true,
                cwd: 'components/font-awesome/css/',
                src: ['font-awesome.min.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'components/font-awesome/font/',
                src: ['fontawesome-webfont.woff'],
                dest: 'lib/font/'
                },
                //bootstrap
                {
                expand: true,
                cwd: 'components/bootstrap/dist/js/',
                src: ['bootstrap.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'components/bootstrap/dist/css/',
                src: ['bootstrap.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'components/bootstrap/dist/css/',
                src: ['bootstrap-theme.css'],
                dest: 'lib/vendors/'
                },
                //datrepicker
                {
                expand: true,
                cwd: 'components/bootstrap-datepicker/js/',
                src: ['bootstrap-datepicker.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'components/bootstrap-datepicker/js/locales',
                src: ['bootstrap-datepicker.de.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'components/bootstrap-datepicker/css/',
                src: ['datepicker.css', 'datepicker3.css'],
                dest: 'lib/vendors/'
                },
                //underscore
                {
                expand: true,
                cwd: 'components/underscore/',
                src: ['underscore-min.js'],
                dest: 'lib/vendors/'
                },
                //require.js
                {
                expand: true,
                cwd: 'components/requirejs/',
                src: ['require.js'],
                dest: 'lib/vendors/'
                },
                //list.js
                {
                expand: true,
                cwd: 'components/list/dist',
                src: ['list.min.js'],
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
                src: ['css/*'],
                dest: 'builds/website/'
                },
                {
                expand: true,
                src: ['src/*'],
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
