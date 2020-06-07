var note = new note("Hello")

it("should print passed string", function() {
  expect(note.readOne()).toEq("Hello");
});
