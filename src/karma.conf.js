module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'scripts/angular.js',
            'scripts/angular-sanitize.js',
            'scripts/angular-mocks.js',
            'scripts/angular-ui-router.js',
            'scripts/ui-bootstrap.js',
            'scripts/ui-bootstrap-tpls.js',
            'app/app.js',
            'app/controllers/*.js',
            'app/directives/**/*.js',
            'app/views/*.html',
            { pattern: 'images/**/**/*', watched: false, included: false, served: true },
            'tests/app/**/*Spec.js',
            'tests/app/**/*-spec.js',
            'app/directives/**/*.html'
        ],
        proxies: {
            '/images/': 'http://localhost:54321/cv/src/images/'
        },
        exclude: [
        ],
        preprocessors: {
            "app/directives/**/*.html": "ng-html2js",
            "app/views/*.html": "ng-html2js"
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    })
}