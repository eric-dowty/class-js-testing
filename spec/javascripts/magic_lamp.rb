MagicLamp.fixture do 

  Idea.create([
    { title: "First idea", body: "this is the first body" },
    { title: "Second idea", body: "this is the second body" }
  ])

  render template: 'ideas/index'
end