module.exports = {

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
                cwd: 'bower_components/bootstrap/dist/js/',
                src: ['bootstrap.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: ['bootstrap.css'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: ['bootstrap-theme.css'],
                dest: 'lib/vendors/'
                },
                //datrepicker
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/js/',
                src: ['bootstrap-datepicker.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/js/locales',
                src: ['bootstrap-datepicker.de.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/css/',
                src: ['datepicker.css', 'datepicker3.css'],
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
                },
                //list.js
                {
                expand: true,
                cwd: 'bower_components/list/dist',
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
                dest: 'dist/'
                },
                {
                expand: true,
                src: ['img/*/**'],
                dest: 'dist/'
                },
                {
                expand: true,
                src: ['css/*'],
                dest: 'dist/'
                },
                {
                expand: true,
                src: ['src/*'],
                dest: 'dist/'
                },
                {
                expand: true,
                src: ['*.html'],
                dest: 'dist/'
                }
        ]
    }

};
