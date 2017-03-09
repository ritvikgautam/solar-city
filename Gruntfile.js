module.exports = function(grunt){

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest:{
            local:{
                options:{
                    reporter:'spec',
                    quiet:false,
                    clearRequireCache: false,
                    ui:'bdd'
                },
                src:['test/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default',[]);

    grunt.registerTask('test',['mochaTest:local']);
};