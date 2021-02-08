const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);

// get meal list that matches with the ingredient--
function getMealList(){
    Let searchInputTxt = document.getElementById('search-input').Value.trim();
    console.log(searchInputTxt);
}

