"use strict";

(function(exports) {

  function HTMLConverter(data) {
    this.data = data
    this.conversion = []
  }

  HTMLConverter.prototype.convert = function(htmlElement){
    return `<${htmlElement}> ${this.data} <${htmlElement}>`;
  }
  

  exports.HTMLConverter = HTMLConverter;

})(this);




// // In order to display a list of notes to the user, 
// they need to be converted to HTML. In this challenge, 
// you'll write code for a note list view. This code takes a 
// note list model and outputs it as a string that contains the
//  HTML for an unordered HTML list.


// Interpolate data into static HTML. /

//  TDD the note list view object that fulfils the specification below.
// Specification
// Code in a file called note-list-view.js.
// Code is wrapped in the module pattern. /
// Uses the constructor and prototype pattern to define a note list view object that can be instantiated. /
// Takes a note list model upon instantiation. /
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.
