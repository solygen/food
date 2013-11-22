module.exports = {
    build: {
        src: ['src/templates.js', 'src/plugins.js', 'src/recipies.js', 'src/main.js'],
        dest: 'lib/<%= pkg.name %>.min.js'
    }
    // recipies: {
    //     src: ['src/recipies/**/*.js'],
    //     dest: 'src/recipies.js'
    // }
};
