console.log("NoteList Spec")

it("Should read the a list of notes", function(){
  var test2 = new NoteList
  test2.list.push("Hi");
  expect(test2.readAll()).toInclude("Hi");
})

it("Adds a note instance to the array in NoteList", function(){
  var note = {text: "Hello", id: 0}
  var test2 = new NoteList
  test2.add(note); 

  expect(test2.list[0]).toHaveValue("Hello");
});

it("Updates the noteID by 1", function(){
  var noteList = new NoteList
  noteList._noteID()

  expect(noteList.noteID).toEq(1)
})

it(".create should call new note with text", function(){
  var noteList = new NoteList

  var note = noteList.create("Note 1")

  expect(note).toHaveValue("Note 1")
  expect(note).toHaveValue(0)
});


  
  