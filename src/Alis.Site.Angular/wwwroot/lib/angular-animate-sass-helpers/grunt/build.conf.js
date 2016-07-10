module.exports = {

    build: {
        root: 'build/',
        css: 'example.css'
    },

    banner: '/**********************************************************' +
            '\n * ' +
            '\n * <%= pkg.name %> - v<%= pkg.version %>' +
            '\n * ' +
            '\n * Release date : <%= grunt.template.today("yyyy-mm-dd : HH:MM") %>' +
            '\n * Author       : <%= pkg.author %> ' +
            '\n * License      : <%= pkg.license %> ' +
            '\n * ' +
            '\n **********************************************************/' +
            '\n\n\n\n'

};
