console.log("Note Spec")

it("should print passed string", function() {
    var test = new Note("Hello", 1)
    expect(test.readOne()).toEq("Hello");
});
