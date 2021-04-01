function searchMeal (query) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jasonData) => {
        //console.log(jasonData);
        const data = jasonData.meals;
        console.log(data);
        data.forEach(element => {
            const {idMeal, strMeal, strMealThumb} = element;
            renderData(idMeal, strMeal, strMealThumb);
            //console.log(idMeal, 'strMeal : ' , strMeal); 
        });
})}
//searchMeal('rice');
window.onload = () => {
    const searchFieldElement = document.getElementById('searchField');
    searchFieldElement.onkeyup = (event) => {
        searchMeal(searchFieldElement.value);
    }
}
function renderData (idMeal, strMeal, strMealThumb){
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = strMeal;
    div .appendChild(button);
    const img = document.createElement('img');
    img.src = strMealThumb;
    div .appendChild(img);
    document.body.appendChild(div);
}
//document.getElementById('searchButton').addEventListener('click', searchMeal());