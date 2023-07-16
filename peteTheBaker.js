// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  let recipeIngredients = Object.keys(recipe);
  let availableIngredients = Object.keys(available);
  let missing = (el) => availableIngredients.includes(el);
  if (recipeIngredients.every(missing)) {
    return recipeIngredients
      .map((el) => Math.floor(available[el] / recipe[el]))
      .sort((a, b) => a - b)[0];
  } else {
    return 0;
  }
}
