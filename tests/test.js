var require = require || null;
var fsAjaxer = fsAjaxer || null;
var chai = chai || null;

if (require) {

  fsAjaxer = require('../lib/ajaxer-fs');
  chai = require('chai');
}

var expect = chai.expect;

describe('#get', function() {

  it('should load a file', function(done) {
    fsAjaxer.get('./LICENSE', null, function(result) {
      expect(result).to.be.a('string');
      done();
    });
  });

});
