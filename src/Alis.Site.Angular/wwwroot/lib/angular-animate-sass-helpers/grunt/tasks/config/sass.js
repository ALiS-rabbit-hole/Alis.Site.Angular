module.exports = {
    build: {
        files: [{
            src: 'src/example/example.scss',
            dest: '<%= build.root %>/<%= build.css %>',
        }]
    }
};
