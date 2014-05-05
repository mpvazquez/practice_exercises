var section = $("section");
var input = $("input[name=commit]");

// $(document).ready(function() {

  var response = $.ajax({
    type: "GET",
    url: "/messages",
    dataType: 'JSON'
  })
  .done(function(data){
    section.text(data);
  });

  input.click(function(event) {
    event.preventDefault();
  });

// });