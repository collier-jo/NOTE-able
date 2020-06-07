var test = new Note("Hello")
var test2 = new NoteList

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



// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.