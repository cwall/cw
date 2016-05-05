module.exports = {
  paths: {
    public: 'static',
      // watched: [
      //   'app',
      //   'assets',
      //   'styles',
      //   'vendor',
      // ]
    },
  files: {
    javascripts: {
    	joinTo: {
    		'js/app.js': /^app/,
    		'js/vendor.js': /^(vendor|bower_components)/,
    		'test/js/test.js': /^test(\/|\\)(?!vendor)/,
	      'test/js/test-vendor.js': /^test(\/|\\)(?=vendor)/
    	}
    },
    stylesheets: {
    	joinTo: {
    		'css/styles.css': /^app/,
    		'css/vendor.css': /^(vendor|bower_components)/
    	}
    },
    templates: {joinTo: 'app.js'}
  }
}
