describe('my test suite', function() {

  it.skip('actually works', function(){
    console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!")
    assert(true);
  });

  it('loads magic lamp', function(){
    MagicLamp.load('ideas/index');
    assert.equal($('.ideas').length, 1);
  });

  describe('how to async', function () {
    it('can assert after an AJAX call', function (done) {
      MagicLamp.load('ideas/index');
      $.getJSON('/ideas').then(function (data) {
        assert.equal(data.idea.length, 2);
        done();
      });
    });
  });

});