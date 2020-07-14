
var noteDouble = {
  readOne: function(){
    return "I am a fake note"
  }
}


var singleNote = new SingleNoteView(noteDouble)

it("Returns text as HTML", function(){
  expect(singleNote.view()).toEq("<div>I am a fake note</div>");
}); 