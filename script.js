/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("JavaScript");
let shoppingList = [];
let muffinList = ["chocolate", "blueberry", "banana", "strawberry", "cinnamon"];
let croissantList = ["chocolate", "almond", "plain", "cheese", "ham"];
let coffeeList = ["latte", "cappuccino", "americano", "espresso", "mocha"];
let fruit_wineList = ["apple", "grape","passionfruit", "fig", "grapefruit"];

/************************
 Main Code
************************/
OUTPUT.innerHTML = "<h2>Coffee</h2>";

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

function addShopping(){
    const SHOP_FIELD = document.getElementById("shopField");
    if (SHOP_FIELD.checkValidity === false) {
        OUTPUT.innerHTML += "<br>Sorry, please enter a valid item.";
    } else {
        OUTPUT.innerHTML +=  "<br>You have added <b>[ " +SHOP_FIELD.value+" ]</b> to the list";
        shoppingList.push(SHOP_FIELD.value);
        OUTPUT.innerHTML += "<br>There are <b>" + shoppingList.length + "</b> items in your shopping list.<br>" ;
        for (let i = 0; i < shoppingList.length; i++) {
            OUTPUT.innerHTML += (i+1) + ". " + shoppingList[i] + "<br>";
        } 
        OUTPUT.innerHTML += "<br>";
    }
}

