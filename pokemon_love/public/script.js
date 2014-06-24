console.log('JavaScript Loaded');

var pokemonFaves = [];

function renderFaves() {
  $('#favoritePokemonList').empty();

  $.each(pokemonFaves, function(i, pokemon) {
    $('<li>').html(pokemon).appendTo($('#favoritePokemonList'));
  });
}

$(document).ready(function() {
  $('.faves-list').hide();

  $('#view-faves').on("click", function() {
    if($('.faves-list').css("display") !== "none") {
      $('.faves-list').hide();
    } else {
      $('.faves-list').show();
      // checks if <ul> on favorites page exists before rendering
      if(pokemonFaves.length > 0) {      
        renderFaves();
      }
    }
  });

  $('.add-fave').on('click', function() {
    // checks to make sure value is not already in array
    if($.inArray($(this).attr("id"), pokemonFaves) == -1) {
      pokemonFaves.push($(this).attr("id"));
      renderFaves();
      $(this).html("-");
    } else if ($(this).html() === "-") {
      var pokeIndex = pokemonFaves.indexOf($(this).attr("id"));
      pokemonFaves.splice(pokeIndex, 1);
      renderFaves();
      $(this).html("+");
    }
  });
});