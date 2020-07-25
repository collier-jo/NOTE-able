
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

it("adds a note into the single note div!!!!!!!!!!!!!!!!", function(){

  const previousURL = window.location.href
  var double = {
    list: [{text: "bread"}]
  }

  var controllerTest = new NoteController
  controllerTest.add("bread")
  controllerTest.addToPage()


  expect(document.getElementById("single-note").innerHTML).toEq("bread")
  
  // expect(window.location.hash).toEq("#notes/0")
  // console.log(document.getElementById("single-note").innerHTML)
  // expect( document.getElementById("single-note").innerHTML).toEq("bread")



  // let insertNotesToPage = document.getElementById("single-note")
  // console.log(insertNotesToPage.innerHTML)
  // expect(document.getElementById("single-note").innerHTML).toEq("bread")
})


// const saveGetElementById = document.getElementById
//   let doubleDiv = {innerHTML: undefined}
//   document.getElementById = () => doubleDiv
  
//   noteDouble = {
//     list: [{text: "Bread"}]
//   }

//   previousURL = window.location.href
//   console.log("previousURL")
//   console.log(previousURL)

//   var controllerTest = new NoteController()
//   controllerTest.add("Bread")

//   document.getElementById('0').click();

//   newURL = window.location.href
//   console.log(newURL)

//   expect()

//   document.getElementById = saveGetElementById