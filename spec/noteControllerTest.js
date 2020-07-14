// A note controller can be instantiated.
// The innerHTML property of the app element 
// contains HTML somewhat similar to: 
// <ul><li><div>Favourite food: pesto</div></li></ul>. 
// (You'll need to mock some stuff to achieve this.)

// const { NoteController } = require("../note-controller")

console.log("Controller Spec")

var noteListdouble = {
  create: function(text){
    return text
  },
  convertAllToHTML: function(){
   return "<ul><li><div>Hello</div></li></ul>"
  }
};

var controllerTest = new NoteController(noteListdouble)

it("Should add to the list array", function(){
  expect(controllerTest.add("Hello")).toEq("Hello");
}); 


it("Should fill the innerHTML", function(){
  expect(controllerTest.addToPage()).toEq("<ul><li><div>Hello</div></li></ul>")
})
