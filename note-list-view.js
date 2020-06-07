"use strict";

(function(exports) {

  function HTMLConverter(data) {
    this.data = data
    this.conversion = []
  }

  HTMLConverter.prototype.convert = function(){
    return `<h2> ${this.data} <h2>`;
  }
  

  exports.HTMLConverter = HTMLConverter;

})(this);




