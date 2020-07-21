var hasBeenCalled = {}
var hasBeenCalledWith = {}

function it(label, callback) {
    console.log("Test: " + label)
    callback()
  }

  // spy on function 
  // function spyOn(obj, myFunction){

  //   var unicorn = function() {
  //     hasBeenCalled[myFunction] = 1
  //   }

  //   obj[myFunction] = unicorn

  // }
  
  function expect(a){
    return {
      toEq: function(b){
        if(a === b){
          console.log("Pass")
        }else{
          console.log("Fail")
        }
      },
      toInclude: function(b){
        if(a.includes(b)){
          console.log("Pass")
        }else{
          console.log("Fail")
        }
      },
      toHaveBeenCalled: function(){
        if(hasBeenCalled[a.name] >= 1){
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }, 
      toHaveBeenCalledWith: function(b){ 
        if(hasBeenCalledWith[a.name].includes(b)){
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      },
      toHaveValue: function(b){
        if(Object.values(a).includes(b)){
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }

  /// chnage to errors rather than if else 