console.log("Note Spec")

var test = new Note("Hello")

it("should print passed string", function() {
    expect(test.readOne()).toEq("Hello");
});