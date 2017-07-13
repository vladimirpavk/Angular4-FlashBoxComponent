module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
  
    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      // System.js for module loading
      'node_modules/typescript/lib/typescript.js',
      'node_modules/systemjs/dist/system.src.js',
      
      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      //reflect-metadata
      'node_modules/reflect-metadata/Reflect.js',    

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'client/systemjs.config.js', included: false, watched: true },      
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

      // transpiled application & spec code paths loaded via module imports
      { pattern: 'client/ap/modules/commoncomponents/components/flashbox/1.spec.*', included: false, watched: true},
      { pattern: 'cliet/**/*.spec.js', included: false, watched: true},
      { pattern: 'client/**/*.js', included: false, watched: true },            

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: 'client/**/*.html', included: false, watched: true },
      { pattern: 'client/**/*.css', included: false, watched: true },

      // Paths for debugging with source maps in dev tools
      { pattern: 'client/**/*.ts', included: false, watched: true },
      { pattern: 'client/**/*.js.map', included: false, watched: true }      
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for modules fetched by SystemJS
      '/node_module/': '/base/node_modules/'
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
