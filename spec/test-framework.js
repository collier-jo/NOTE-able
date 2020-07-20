var hasBeenCalled = {}

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
        console.log(hasBeenCalled)
        console.log(a.name)
        if(hasBeenCalled[a.name] === 1){
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }