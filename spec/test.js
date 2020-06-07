var test = new Note("Hello")
var test2 = new NoteList
var stringHTML = new HTMLConverter("Hello") 

it("should print passed string", function() {
  expect(test.readOne()).toEq("Hello");
});

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

it("Converts a string to HTML", function(){
  expect(stringHTML.convert()).toEq("<h2> Hello <h2>")
})