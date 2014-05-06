var Animal = Backbone.Model.extend({
  urlRoot: "/animals",
  defaults: {
    name: ""
  },
  validate: function(attrs, option) {
    if(!attrs.name.length) {
      return "name can't be blank"
    }
  }
});

var animalView = Backbone.View.extend({
  el: "#animalView",
  initialize: function(){
    this.listenTo(this.model, "invalid", this.displayErrors);
  },
  events: {
    "click #new-animal": "newAnimal"
  },
  displayErrors: function() {
    console.log("error");
    var error = $("<p>").text(this.model.validate);
  },
  newAnimal: function(event){
    console.log("new animal");
    var animalName = this.$('input').val();
    this.model.save({name: animalName});
  }
});

$(document).ready(function(){
  view = new animalView({model: new Animal() });
})

// //Model

//   defaults: {
//     name: "Ghost"
//   }, 

//   initialize: function(){
//     console.log("new model");
//     console.log("hello, I am " + this.get("name"));

//   }
// });


// //View

// var Main = Backbone.View.extend({
//   el: "#main",

//   initialize: function() {
//     console.log("newing up the view");
//     this.$('h1').text("Arya's Hit list");
//     this.$('input').hide();
//     this.listenTo(this.model, "change", this.alert);
//   },

//   alert: function() {
//     alert("change");
//   },

//   events: {
//     "click h1": "add",
//     "dblclick .show": "show"
//   },

//   add: function(event) {

//   },

//   show: function(event) {
//     this.$('input').slideDown();
//   }
// });

// $(document).ready(function(){
//   animal = new Animal({name: "John"});
//   view = new Main({model: animal})
// })