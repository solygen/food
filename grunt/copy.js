module.exports = {

    // copy relevant vendor files to lib directory (vendor directory is only temporary)s
    update: {
        files: [
                //jQuery
                {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: ['jquery.min.js'],
                dest: 'lib/vendors/'
                },
                //materialize
                {
                expand: true,
                cwd: 'bower_components/Materialize/dist/js/',
                src: ['materialize.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/Materialize/dist/font/',
                src: ['*/**'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/Materialize/dist/css/',
                src: ['materialize.min.css'],
                dest: 'lib/vendors/'
                },
                //datrepicker
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/dist/js/',
                src: ['bootstrap-datepicker.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/dist/locales',
                src: ['bootstrap-datepicker.de.min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/bootstrap-datepicker/dist/css/',
                src: ['bootstrap-datepicker.min.css', 'bootstrap-datepicker3.min.css', 'bootstrap-datepicker.standalone.min.css', 'bootstrap-datepicker3.standalone.min.css'],
                dest: 'lib/vendors/'
                },
                //underscore
                {
                expand: true,
                cwd: 'bower_components/underscore/',
                src: ['underscore-min.js'],
                dest: 'lib/vendors/'
                },
                //backbone
                {
                expand: true,
                cwd: 'bower_components/backbone/',
                src: ['backbone-min.js'],
                dest: 'lib/vendors/'
                },
                {
                expand: true,
                cwd: 'bower_components/backbone.marionette/lib',
                src: ['backbone.marionette.min.js'],
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
                src: ['js/*'],
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
