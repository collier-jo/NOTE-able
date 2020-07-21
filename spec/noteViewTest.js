// it("NoteList converts this.list.length === 1 into HTML elements", function() {
//   test3.create("Good'ay")
//   expect(test3.convertAllToHTML()).toEq("<ul><li><div>Good'ay</div></li></ul>")
// })

// it("NoteList converts this.list.length === 2 into HTML elements", function() {
//   test3.list = []
//   test3.create("Gooday")
//   test3.create("Hello")

//   expect(test3.convertAllToHTML()).toEq("<ul><li><div>Gooday</div></li><li><div>Hello</div></li></ul>")
// })

// it("NoteList converts this.list.length === 3 into HTML elements", function() {
//   test3.list = []
//   test3.create("Gooday")
//   test3.create("Hello")
//   test3.create("Howdy")

//   expect(test3.convertAllToHTML()).toEq("<ul><li><div>Gooday</div></li><li><div>Hello</div></li><li><div>Howdy</div></li></ul>")
// })

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
      var array = ["I am a fake note"]
      return array
    }
  }
  
  let noteView = new NoteView(noteListDouble)

  expect(noteView.convertAllToHTML()).toEq("<ul><li><div id=0>I am a fake note</div></li></ul>")
})



