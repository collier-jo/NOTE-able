
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
  const saveGetElementById = document.getElementById
  let doubleDiv = {innerHTML: undefined}
  document.getElementById = () => doubleDiv



  var noteListdouble = {
    convertAllToHTML: function(){
      hasBeenCalled["convertAllToHTML"] = 1
    }
  };
  // spyOn(noteListdouble, "convertAllToHTML")
  var controllerTest = new NoteController(noteListdouble)
  controllerTest.addToPage()
  expect(noteListdouble.convertAllToHTML).toHaveBeenCalled()

  document.getElementById = saveGetElementById


})

// it("Adds text to innerHTML", function(){
//   const saveGetElementById = document.getElementById("app")
//   let doubleDiv = {innerHTML: undefined}
//   document.getElementById = () => doubleDiv

//   noteListdouble = {
//     convertAllToHTML: function(){
//       return "<ul><li><div>Hello</div></li></ul>"
//     }
//   }

//   var controllerTest = new NoteController(noteListdouble)

//   // expect(controllerTest.addToPage()).toEq("Hello")
//   console.log(saveGetElementById)
   
//   document.getElementById = saveGetElementById
// })
