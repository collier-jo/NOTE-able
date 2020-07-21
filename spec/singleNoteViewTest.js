


it("Read One has been called ", function(){
  let noteDouble = {
    readOne: function(){
      hasBeenCalled["readOne"] = 1
    }
  }

  let singleNote = new SingleNoteView(noteDouble)
  singleNote.view()

  expect(noteDouble.readOne).toHaveBeenCalled();
}); 





