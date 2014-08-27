// Karma configuration
// Generated on Tue Aug 26 2014 17:39:10 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',
//    basePath: '../vendor/assets/javascripts),

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [

      "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js",
//      "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js",
//      "http://cdnjs.cloudflare.com/ajax/libs/select2/3.4.5/select2.min.js",
//      "http://code.angularjs.org/1.2.9/angular.min.js",
      'vendor/assets/javascripts/angular.min.js',
      'vendor/assets/javascripts/angular-mocks.js',
      'node_modules/angular-loading-bar/build/loading-bar.js',
      "http://code.angularjs.org/1.2.9/angular-resource.min.js",
      "http://code.angularjs.org/1.2.9/angular-route.min.js",
      "http://code.angularjs.org/1.2.8/angular-animate.min.js",
      "http://code.angularjs.org/1.2.9/angular-cookies.min.js",
      "http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.min.js",
      "http://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places",
//      "http://code.angularjs.org/1.2.9/angular-mocks.js",

      'app/assets/javascripts/angular/spokenvote.coffee',
//      'app/assets/javascripts/angular/*.coffee',
      'app/assets/javascripts/angular/controllers/proposals_controller.coffee',
//      'app/assets/javascripts/angular/**/*.coffee',
      'test/**/learning_spec.coffee'
//        'test/**/*spec.coffee'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
          bare: true,
          sourceMap: true
      },
      // transforming the filenames
      transformPath: function(path) {
          return path.replace(/\.coffee$/, '.js');
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8080,
//    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
//    browsers: ['Chrome', 'PhantomJS', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-coffee-preprocessor',
        'karma-sprockets'
    ],

    sprocketsPath: [
      'app/assets/javascripts'
    ],
    sprocketsBundles: [
        'angular-loading-bar.js',
        'application.js'
      ]

  });
};
