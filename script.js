/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("JavaScript");
const WELCOME_FORM = document.getElementById("welcomeForm");
let shoppingList = [];
let MUFFIN_LIST = ["plain", "chocolate", "blueberry", "banana", "strawberry", "cinnamon"];
let CROISSANT_LIST = ["chocolate", "almond", "plain", "cheese", "ham"];
let COFFEE_LIST = ["latte", "cappuccino", "americano", "espresso"];
let FRUIT_WINE_LIST = ["apple", "grape", "passionfruit", "fig", "grapefruit"];


/************************
 Main Code
************************/
OUTPUT.innerHTML += "<h2 class='title'>Best Recommended! ↖(^ω^)↗</h2>";
OUTPUT.innerHTML += "<img src='Images/coffee/latte.jpeg' id='coffee4' class='halfWidth' alt='latte'>";
OUTPUT.innerHTML += "<img src='Images/croissant/ham&cheese.jpg' id='croissant5' class='halfWidth' alt='ham&cheese'>";
OUTPUT.innerHTML += "<img src='Images/muffin/choc.jpg' id='goodMuffin' class='halfWidth' alt='goodMuffin'>";
OUTPUT.innerHTML += "<img src='Images/wine/apple.png' id='goodFruitWine' class='halfWidth' alt='goodFruitWine'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Latte - Morning Mist</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Croissant - Morning Savour</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Muffin - Midnight Cocoa</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Fruit Wine - Golden Orchard</h3>";
OUTPUT.innerHTML += "<p class='description'>Smooth espresso blended with silky steamed milk, creating a rich, creamy coffee with a velvety finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Tender smoked ham nestled in buttery pastry for a warm and satisfying savoury bite.</p>";
OUTPUT.innerHTML += "<p class='description'>Rich cocoa and melted chocolate folded into a moist muffin for an indulgent treat.</p>";
OUTPUT.innerHTML += "<p class='description'>Light and refreshing with crisp apple notes and a smooth, delicate finish.</p>";

/*************************
Functions 
************************/
function nameInput() {
    const NAME_FIELD = document.getElementById("nameField");
    if (NAME_FIELD.value.trim() === "") {
        return;
    } else if (NAME_FIELD.value.trim().length < 3) {
        WELCOME_FORM.innerHTML += "<br><p>Your name must be at least 3 characters long.</p>";
        return;
    } else {
        WELCOME_FORM.innerHTML = "<br>Welcome to the Shed of Light, " + NAME_FIELD.value.trim() + "!<br>";
        return;
    }
}

function addShopping() {
    const SHOP_FIELD = document.getElementById("shopField");
    if (SHOP_FIELD.value === "") {
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
