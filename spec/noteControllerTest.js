// A note controller can be instantiated.
// The innerHTML property of the app element 
// contains HTML somewhat similar to: 
// <ul><li><div>Favourite food: pesto</div></li></ul>. 
// (You'll need to mock some stuff to achieve this.)

// const { NoteController } = require("../note-controller")

console.log("Controller Spec")

var noteListdouble = {
  list: [],

  create: function(text){
    this.list.push(text)
    return this.list
  },

  convertAllToHTML: function(){
    var arr = this.list
    var html = ["<ul>"]

    for(var index = 0; index < arr.length; index ++){
      var string = arr[index].toString()
      html.push(`<li><div>${string}</div></li>`)
    }

    html.push("</ul>")
    var stringHtml = html.join("")
  
    return stringHtml
  }
};

var controllerTest = new NoteController(noteListdouble)

it("Should add to the list array", function(){
  expect(controllerTest.add("Hello")).toInclude("Hello");
}); 

it("Should interact with the convertAllToHTML method", function(){
  expect(controllerTest.view()).toEq("<ul><li><div>Hello</div></li></ul>")
  console.log(controllerTest.addToPage())
})

it("Should fill the innerHTML", function(){
  expect(controllerTest.addToPage()).toEq("<ul><li><div>Hello</div></li></ul>")
})
