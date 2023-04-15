(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('dustjs-helpers'), require('common-dustjs-helpers').exportTo);
  } else {
    var commonDustjsHelpers = new root.CommonDustjsHelpers();
    factory(root.dust, commonDustjsHelpers.export_to);
  }
})(this, function (dust, registerCommonDustjsHelpers) {
  if (typeof registerCommonDustjsHelpers === 'function') {
    registerCommonDustjsHelpers(dust);
  } else {
    console.log('WARNING: could not register CommonDustjsHelpers');
  }

  // Custom Helpers
  var helpers = {
    /**
     * Resolves a URL given a BASE
     */
    resolveurl: function (chunk, context, bodies, params) {
      var base = context.resolve(params.base);
      var target = context.resolve(params.target);
      var myURL;
      if (typeof URL === 'undefined') {
        myURL = require('url').URL;
      } else {
        myURL = URL;
      }
      try {
        var url = new myURL(target, base);
        chunk = chunk.write(url);
      } catch (e) {
        try {
          var url = new myURL(target);
          chunk = chunk.write(url);
        } catch (e) {
          console.log("WARNING: Can't resolve url:", target, 'base:', base);
          chunk = chunk.write(target);
        }
      }
      return chunk;
    },

    /**
     * Prints the current year
     */
    year: function (chunk, context, bodies, params) {
      var date = new Date();
      chunk.write(date.getFullYear());
      return chunk;
    },
  };

  for (var key in helpers) {
    dust.helpers[key] = helpers[key];
  }

  return dust;
});
