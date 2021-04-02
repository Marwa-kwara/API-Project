export function searchMeal (query) {
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