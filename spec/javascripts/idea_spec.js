describe('rendering ideas', function() {

  var idea = { title: 'title', body: 'body' };
  var renderedIdea = renderIdea(idea);

  it('can turn an idea object into a DOM element', function(){
    assert(renderedIdea instanceof jQuery);
  });

  it('should have an H2 with the idea title', function(){
    assert.equal(renderedIdea.find('h2').text(), 'title');
  });

  it('should have a paragraph', function(){
    assert.equal(renderedIdea.find('p').text(), 'body');
  });

  it('should have an idea class', function(){
    assert(renderedIdea.hasClass('idea'));
  });

});

describe('adding initial ideas to the page', function(){
  
  it('renders ideas to the page', function(){
    MagicLamp.load('ideas/index');
    var targetElement = $('.ideas');
    var ideas = [
      { title: 'title1', body: 'body1' },
      { title: 'title2', body: 'body2' }
    ]    
  
    addIdeasToPage(ideas, targetElement);

    assert.equal(targetElement.find('.idea').length, 2)
  });

  it('fetches them from the API and renders them onto the page', function(done){
    MagicLamp.load('ideas/index');
    var targetElement = $('.ideas');
    
    fetchIdeasAndAddThemToThePage(targetElement).then(function() {
      assert.equal(targetElement.find('.idea').length, 2);
      done();
    });
  });


});