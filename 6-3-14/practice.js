console.log("hi");

$(document).ready(function() {
  // As a user, I want to be able to submit my name, so I can see my name on a page on submit
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    $("h1").text("Whaddup, " + name);
    var newPerson = new Person(name);
    $("ul").append(newPerson.el.text(newPerson.name));
  });
});

// Create a javascript object via a constructor function
function Person (name) {
  this.name = name,
  // The JS object needs an "el" property which will be the HTML representation of this object
  this.el = $("<li>")
}


// Append the new person’s el to the dom