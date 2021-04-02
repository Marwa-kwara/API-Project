 export function renderData (idMeal, strMeal, strMealThumb){
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = strMeal;
    div .appendChild(button);
    const img = document.createElement('img');
    img.src = strMealThumb;
    div .appendChild(img);
    document.body.appendChild(div);
}