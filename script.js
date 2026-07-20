/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("JavaScript");
let shoppingList = [];
let MUFFIN_LIST = ["plain", "chocolate", "blueberry", "banana", "strawberry", "cinnamon"];
let CROISSANT_LIST = ["chocolate", "almond", "plain", "cheese", "ham"];
let COFFEE_LIST = ["latte", "cappuccino", "americano", "espresso"];
let FRUIT_WINE_LIST = ["apple", "grape", "passionfruit", "fig", "grapefruit"];

const GOOD_MUFFIN = document.getElementById("goodMuffin");
const GOOD_CROISSANT = document.getElementById("goodCroissant");
const GOOD_COFFEE = document.getElementById("goodCoffee");
const GOOD_FRUIT_WINE = document.getElementById("goodFruitWine");
/************************
 Main Code
************************/
OUTPUT.innerHTML = "<h2>Best Recommended! ↖(^ω^)↗</h2>";
GOOD_MUFFIN.innerHTML
GOOD_CROISSANT.innerHTML
GOOD_COFFEE.innerHTML
GOOD_FRUIT_WINE.innerHTML

/*************************
Functions 
************************/
function nameInput() {
    const NAME_FIELD = document.getElementById("nameField");
    if (NAME_FIELD.checkValidity === false) {
        OUTPUT.innerHTML = "<br>Sorry, please enter a valid name.";
    } else {
        OUTPUT.innerHTML = "<br>Welcome to the Shed of Light, <b>" + NAME_FIELD.value + "</b>!<br>";
    }
}

function addShopping() {
    const SHOP_FIELD = document.getElementById("shopField");
    if (SHOP_FIELD.checkValidity === false) {
        OUTPUT.innerHTML += "<br>Sorry, please enter a valid item.";
    } else {
        OUTPUT.innerHTML += "<br>You have added <b>[ " + SHOP_FIELD.value + " ]</b> to the list";
        shoppingList.push(SHOP_FIELD.value);
        OUTPUT.innerHTML += "<br>There are <b>" + shoppingList.length + "</b> items in your shopping list.<br>";
        for (let i = 0; i < shoppingList.length; i++) {
            OUTPUT.innerHTML += (i + 1) + ". " + shoppingList[i] + "<br>";
        }
        OUTPUT.innerHTML += "<br>";
    }
}

