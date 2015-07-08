describe('my test suite', function() {

  // it('actually works', function(){
  //   console.log("HERE!!!!!!!!!!!!!!!!!!!!!!!!!")
  //   assert(true);
  // });

  it('actually works', function(){
    MagicLamp.load('ideas/index');
    assert.equal($('.ideas').length, 1);
  });

});