
var fs = require('fs');

(function(root, factory) {
  if (typeof define === 'function') {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.fsAjaxer = factory();
  }
})(this, function() {

  return {

    post: function(url, data, callback) {
      this.connect('POST', url, data, callback);
    },

    get: function(url, data, callback) {
      this.connect('GET', url, data, callback);
    },

    connect: function(method, url, data, callback) {
      if (typeof data === "function" && typeof callback === "undefined") {
        callback = data;
        data = null;
      }

      fs.readFile(url, function(err, data) {
        callback(data.toString());
      });

    }

  };
});
