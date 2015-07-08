function renderIdea(idea) {
  return $('<div><h2>' + idea.title + '</h2><p>' + idea.body + '</p></div>').addClass('idea');
}

function addIdeasToPage(ideas, target) {
  var renderedIdeas = ideas.map(renderIdea);
  $(target).append(renderedIdeas);
}

function fetchIdeasAndAddThemToThePage(target) {
  return $.getJSON('/ideas').then(function (ideas) {
    addIdeasToPage(ideas.idea, target)
  });
}