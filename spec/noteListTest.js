console.log("NoteList Spec")

var test2 = new NoteList
var test3 = new NoteList

it("Should read the a list of notes", function(){
    test2.list.push("Hi");
    expect(test2.readAll()).toInclude("Hi");
  })
  
it("NoteList should return an instance of note ", function(){
  test2.list.push(test.readOne())
  expect(test2.readAll()).toInclude("Hello");
});

it("Adds a note instance to the array in NoteList", function(){
  test2.add(test); 
  expect(test2.readAll()).toInclude("Hello");
});

it("Creates and stores an instance of Note Model", function(){
  test2.create("Howdy");
  test2.create("Good'ay")
  expect(test2.readAll()).toInclude("Howdy");
  expect(test2.readAll()).toInclude("Good'ay");
})

it("NoteList converts this.list.length === 1 into HTML elements", function() {
  test3.create("Good'ay")
  expect(test3.convertAllToHTML()).toEq("<ul><li><div>Good'ay</div></li></ul>")
})

it("NoteList converts this.list.length === 2 into HTML elements", function() {
  test3.list = []
  test3.create("Gooday")
  test3.create("Hello")

  expect(test3.convertAllToHTML()).toEq("<ul><li><div>Gooday</div></li><li><div>Hello</div></li></ul>")
})

it("NoteList converts this.list.length === 3 into HTML elements", function() {
  test3.list = []
  test3.create("Gooday")
  test3.create("Hello")
  test3.create("Howdy")

  expect(test3.convertAllToHTML()).toEq("<ul><li><div>Gooday</div></li><li><div>Hello</div></li><li><div>Howdy</div></li></ul>")
})
  
  