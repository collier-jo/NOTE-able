
console.log("Controller Spec!!!!!!!!!!!!!!!!!!!")

it("Create is called", function(){
  var noteListdouble = {
    create: function(text){
      hasBeenCalledWith["create"] = [text]
    },
  };

  var controllerTest = new NoteController(noteListdouble)
  controllerTest.add("Hello")
  expect(noteListdouble.create).toHaveBeenCalledWith("Hello");
}); 


it("CovertAllToHTML is called", function(){
  const saveGetElementById = document.getElementById
  let doubleDiv = {innerHTML: undefined}
  document.getElementById = () => doubleDiv

  var noteViewDoube = {
    convertAllToHTML: function(){
      hasBeenCalled["convertAllToHTML"] = 1
      return "Hello"
    }
  }

  var controllerTest = new NoteController()
  controllerTest.addToPage(noteViewDoube)

  expect(noteViewDoube.convertAllToHTML).toHaveBeenCalled()

  document.getElementById = saveGetElementById
})





it("Adds text to innerHTML", function(){
  const saveGetElementById = document.getElementById
  let doubleDiv = {innerHTML: undefined}
  document.getElementById = () => doubleDiv

  noteListdouble = {
    convertAllToHTML: function(){
      return "<ul><li><div>Hello</div></li></ul>"
    }
  }

  var controllerTest = new NoteController()

  expect(controllerTest.addToPage(noteListdouble)).toEq("<ul><li><div>Hello</div></li></ul>")

  document.getElementById = saveGetElementById
})
