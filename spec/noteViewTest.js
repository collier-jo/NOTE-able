
console.log("Note View")

it("Ensures .readAll is called", function() {
  let noteListDouble = {
    readAll: function(){
      hasBeenCalled["readAll"] = 1
    }
  }
  
  let noteView = new NoteView(noteListDouble)
  
  expect(noteListDouble.readAll).toHaveBeenCalled()
})


it("converts length === 1 into HTML elements", function() {
  
  let noteListDouble = {
    readAll: function(){
      var array = [{text: "I am a fake note", id: 0}]
      return array
    }
  }
  
  let noteView = new NoteView(noteListDouble)

  console.log(noteView.convertAllToHTML())

  expect(noteView.convertAllToHTML()).toEq("<ul><li><a href=#notes/0 id=0>I am a fake note</a></li></ul>")
})


it("converts length === 2 into HTML elements with ID", function() {
  let noteListDouble = {
    readAll: function(){
      var array = [{text: "I am a fake note", id: 0},{ text: "I am a second fake note", id: 1}]
      return array
    }
  }
  
  let noteView = new NoteView(noteListDouble)
  
  expect(noteView.convertAllToHTML()).toEq("<ul><li><a href=#notes/0 id=0>I am a fake note</a></li><li><a href=#notes/1 id=1>I am a second fake n</a></li></ul>")
})



