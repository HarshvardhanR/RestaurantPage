import "./styles/menu.css"
import honeytea from "./honeytea.png"
import blt from "./blt.png"

function loadMenu(){
    const div1 = document.querySelector('.maincontent');
    div1.innerHTML = "";

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('menuTitleHeading');
    titleDiv.textContent = "Culinary Delights";

    div1.appendChild(titleDiv);

    const beverages = document.createElement('div');
    beverages.textContent = "Beverages";
    beverages.classList.add('menuFirstSection');
    div1.appendChild(beverages);

    const beverageType1 = document.createElement('div');
    beverageType1.classList.add('menuBeverageDiv');
    div1.appendChild(beverageType1);

    const insidebeverageType1 = document.createElement('div');

    const beverageName = document.createElement('h2');
    beverageName.textContent = "Honey Tea";
    beverageName.classList.add('menuBeverageName');

    insidebeverageType1.appendChild(beverageName);
    beverageType1.appendChild(insidebeverageType1);

    const beverageInfo = document.createElement('div');
    beverageInfo.classList.add('menuBeverageInfo');
    beverageInfo.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    beverageType1.appendChild(beverageInfo);

    const beverageImagePriceDiv = document.createElement('div');
    beverageImagePriceDiv.classList.add('menuImagePriceDiv');
    beverageType1.append(beverageImagePriceDiv);

    const beveragePrice = document.createElement('div');
    beveragePrice.classList.add('menuBeveragePrice');
    beveragePrice.textContent = "$2";
    beverageImagePriceDiv.append(beveragePrice)

    const beverageImage = document.createElement('img');
    beverageImage.classList.add('menuBeverageImage');
    beverageImage.src = honeytea;
    beverageImagePriceDiv.appendChild(beverageImage);

    const food = document.createElement('div');
    food.textContent = "Main Dishes";
    food.classList.add('menuFirstSection');
    div1.appendChild(food);

    const foodType1 = document.createElement('div');
    foodType1.classList.add('menuBeverageDiv');
    div1.appendChild(foodType1);

    const insidefoodType1 = document.createElement('div');

    const foodName = document.createElement('h2');
    foodName.textContent = "BLT";
    foodName.classList.add('menuBeverageName');

    insidefoodType1.appendChild(foodName);
    foodType1.appendChild(insidefoodType1);

    const foodInfo = document.createElement('div');
    foodInfo.classList.add('menuBeverageInfo');
    foodInfo.textContent = "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.";
    foodType1.appendChild(foodInfo);

    const foodImagePriceDiv = document.createElement('div');
    foodImagePriceDiv.classList.add('menuImagePriceDiv');
    foodType1.append(foodImagePriceDiv);

    const foodPrice = document.createElement('div');
    foodPrice.classList.add('menuBeveragePrice');
    foodPrice.textContent = "$6";
    foodImagePriceDiv.append(foodPrice)

    const foodImage = document.createElement('img');
    foodImage.classList.add('menuBeverageImage');
    foodImage.src = blt;
    foodImagePriceDiv.appendChild(foodImage);
}

export default loadMenu