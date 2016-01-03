module.exports = {
    build: {
        src: ['js/templates.js', 'js/plugins.js', 'js/recipies.js', 'js/main.js'],
        dest: 'lib/<%= pkg.name %>.min.js'
    }
};
