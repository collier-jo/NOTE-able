
console.log("Controller Spec")

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
  var noteListdouble = {
    convertAllToHTML: function(){
      hasBeenCalled["convertAllToHTML"] = 1
    }
  };
  // spyOn(noteListdouble, "convertAllToHTML")
  var controllerTest = new NoteController(noteListdouble)
  controllerTest.addToPage()
  expect(noteListdouble.convertAllToHTML).toHaveBeenCalled()
})
