module.exports = function(grunt) {

    grunt.initConfig({
        openui5_preload: {
            component: {
                options: {
                    resources: {
                        cwd: 'src',
                        prefix: 'incentergy/map/realtime'
                    },
                    dest: 'dist'
                },
                components: 'incentergy/map/realtime'
            }
        }
    });
    grunt.loadNpmTasks('grunt-openui5');
    grunt.registerTask('default', ['openui5_preload']);

};