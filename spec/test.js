var test = new Note("Hello")

it("should print passed string", function() {
  expect(test.readOne()).toEq("Hello");
});


// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.