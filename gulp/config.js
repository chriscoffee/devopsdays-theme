const src = '.';
const build = 'build';
const development = 'build/development';
const production = 'build/production';
const srcAssets = '../static/';
const developmentAssets = 'build/development';
const productionAssets = 'build/production/static';

module.exports = {
    browsersync: {
        development: {
            server: {
                baseDir: [development, build, src]
            },
            port: 9999,
            files: [
                developmentAssets + '/css/*.css',
                developmentAssets + '/js/*.js',
                developmentAssets + '/img/**',
                developmentAssets + '/fonts/*'
            ]
        }
    },
    delete: {
        src: [developmentAssets]
    },

    hugo: {
        development: {
            src: src,
            dest: development,
            config: 'config.toml'
        }
    }
};
