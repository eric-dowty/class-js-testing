describe('rendering ideas', function() {

  var idea = { title: 'title', body: 'body' };
  var renderedIdea = renderIdea(idea);

  it('can turn an idea object into a DOM element', function(){
    assert(renderedIdea instanceof jQuery);
  });

  it('should have an H2 with the idea title', function(){
    assert.equal(renderedIdea.find('h2').text(), 'title');
  });

});


describe('adding initial ideas to the page', function(){

});