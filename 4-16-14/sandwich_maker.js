function makeSandwich(ingredient) {

  function getFilling(filling) { 
    return "mmm " + ingredient +" and " + filling + " sandwich";
  }
  return getFilling;
}

var sandwich = makeSandwich("peanut butter");
