module.exports = {
    build: {
        src: ['src/templates.js', 'src/plugins.js', 'src/recipies.js', 'src/main.js'],
        dest: 'lib/<%= pkg.name %>.min.js'
    }
};
