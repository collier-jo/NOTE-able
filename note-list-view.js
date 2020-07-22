"use strict";

(function(exports) {

  function NoteView(noteList) {
    this.noteList = noteList.readAll()
  }
  
  NoteView.prototype.convertAllToHTML = function(){
    
    var html = ["<ul>"]
  
    for(var index = 0; index < this.noteList.length; index ++){
      var string = this.noteList[index]["text"]
      var shortHand = this._shortNote(string)
      html.push(`<li><div id=${index}>${shortHand}</div></li>`)
    }
  
    html.push("</ul>")
    var stringHtml = html.join("")
    console.log(stringHtml)
    return stringHtml
  }

  NoteView.prototype._shortNote = function(string){
    return string.substring(0,20)
  }
  
  exports.NoteView = NoteView;

})(this);


// makeUrlChangeShowAnimalForCurrentPage();

// function makeUrlChangeShowAnimalForCurrentPage() {
//   window.addEventListener("hashchange", showAnimalForCurrentPage);
// }; <<<<< View 

// function showAnimalForCurrentPage() {
//   showAnimal(getAnimalFromUrl(window.location));
// };

// function getAnimalFromUrl(location) {
//   return location.hash.split("#")[1];
// };

// function showAnimal(animal) {
//   document
//     .getElementById("animal")
//     .innerHTML = animal;
// };


// each note on the page 
// needs to be attached to a URL e.g. http://localhost:8080#notes/1
// I have a list of all notes inc their IDs 
// to access this note.id this.notelist = this.noteList[0]["id"]
// this can be done in a for each or loop

// the 



// Use TDD to update the note list view 
//   so that each note is linked to an 
//   appropriate URL for displaying that 
//   individual note .

//   Go to http://localhost:8080 in your 
// browser. You should be able to click on a 
// note and be redirected to the URL for that note. 

// There should be no page refresh. The page content
//  shouldn't change. (And you won't see the note, yet.)