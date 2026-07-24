/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("JavaScript");
const WELCOME_FORM = document.getElementById("welcomeForm");
const NAME_FIELD = document.getElementById("nameField");
const BALANCE_FORM = document.getElementById("balanceForm");
const BALANCE_FIELD = document.getElementById("balanceField");
const ORDER = document.getElementById("order");
let shoppingList = [];
const MUFFIN_LIST = ["plain", "chocolate", "blueberry", "banana", "cinnamon"];
const MUFFIN_PRICE = ["5.49", "6.19", "6.49", "5.89", "5.79"];
const CROISSANT_LIST = ["chocolate", "almond", "plain", "cheese", "ham"];
const CROISSANT_PRICE = ["6.79", "7.19", "5.79", "6.79", "6.99"];
const COFFEE_LIST = ["latte", "cappuccino", "americano", "espresso"];
const COFFEE_PRICE = ["7.19", "6.99", "5.99", "4.29"];
const FRUIT_WINE_LIST = ["apple", "grape", "passionfruit", "fig", "grapefruit"];
const FRUIT_WINE_PRICE = ["11.59", "11.99", "11.79", "13.49", "11.49"];

let total = 0;

/************************
 Main Code
************************/
OUTPUT.innerHTML += "<h2 class='title'>Best Recommended! ↖(^ω^)↗</h2>";
OUTPUT.innerHTML += "<img src='Images/coffee/latte.jpeg' id='coffee4' class='halfWidth' alt='latte'>";
OUTPUT.innerHTML += "<img src='Images/croissant/ham&cheese.jpg' id='croissant5' class='halfWidth' alt='ham&cheese'>";
OUTPUT.innerHTML += "<img src='Images/muffin/choc.jpg' id='muffin3' class='halfWidth' alt='goodMuffin'>";
OUTPUT.innerHTML += "<img src='Images/wine/apple.png' id='wine1' class='halfWidth' alt='goodFruitWine'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Latte - Morning Mist</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Croissant - Morning Savour</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Muffin - Midnight Cocoa</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Fruit Wine - Golden Orchard</h3>";
OUTPUT.innerHTML += "<p class='description'>Smooth espresso blended with silky steamed milk, creating a rich, creamy coffee with a velvety finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Tender smoked ham nestled in buttery pastry for a warm and satisfying savoury bite.</p>";
OUTPUT.innerHTML += "<p class='description'>Rich cocoa and melted chocolate folded into a moist muffin for an indulgent treat.</p>";
OUTPUT.innerHTML += "<p class='description'>Light and refreshing with crisp apple notes and a smooth, delicate finish.</p>";
price(COFFEE_PRICE[0]);
price(CROISSANT_PRICE[4]);
price(MUFFIN_PRICE[2]);
price(FRUIT_WINE_PRICE[0]);

/*************************
Functions 
************************/
function nameInput() {
    const WELCOME_FORM = document.getElementById("welcomeForm");
    const NAME_FIELD = document.getElementById("nameField");
    name = NAME_FIELD.value.trim();
    if (NAME_FIELD.value.trim() === "") {
        return;
    } else if (NAME_FIELD.value.trim().length < 3) {
        WELCOME_FORM.innerHTML += "<br><p>Your name must be at least 3 characters long.</p>";
        return;
    } else {
        WELCOME_FORM.innerHTML = "Welcome to the Shed of Light, <b>" + NAME_FIELD.value.trim() + "</b>!";
        return;
    }
}
function balanceInput() {
    const BALANCE_FORM = document.getElementById("balanceForm");
    const BALANCE_FIELD = document.getElementById("balanceField");
    balance = Number(BALANCE_FIELD.value);
    if (BALANCE_FIELD.value.trim() === "") {
        return;
    } else {
        BALANCE_FORM.innerHTML = "Your balance:<b>$" + BALANCE_FIELD.value.trim() + "</b>!";
        return;
    }
}

function price(_price) {
    OUTPUT.innerHTML += "<p>Price: $" + _price + "</p>";
}

function addOrder(_item, _uPrice, _qty) {
    const QTY = document.getElementById(_qty);

    if (QTY.value === "") {
        OUTPUT.innerHTML += "<br>Sorry, please enter a valid item.";
        return;
    } else {
        ORDER.innerHTML += "<br>You have added <b>[" + QTY.value + "]</b> <b>[ " + _item + " ]</b><br>";
        shoppingList.push(_item + " ✖︎ " + QTY.value);

        ORDER.innerHTML += "<br>";
        let newPrice = Number(_uPrice) * Number(QTY.value);
        total = total + newPrice
        ORDER.innerHTML += "Current price: " + total;
    }
}

function receipt() {
    const NAME_FIELD = document.getElementById("nameField");
    const BALANCE_FORM = document.getElementById("balanceForm");
    const BALANCE_FIELD = document.getElementById("balanceField");
    ORDER.innerHTML += "<h3>Your Receipt</h3>"
    ORDER.innerHTML += "<p>Name: Sesame</p>"
    ORDER.innerHTML += "<p>Order: </p>"
    for (let i = 0; i < shoppingList.length; i++) {
        ORDER.innerHTML += (i + 1) + ". " + shoppingList[i] + "<br>";
    }

    if (Number(BALANCE_FIELD.value.trim()) < total) {
        ORDER.innerHTML += "<p>Not enough balance (╯﹏╰）</p>"
        return;
    } else if (Number(BALANCE_FIELD.value.trim()) >= total) {
        if (Number(BALANCE_FIELD.value.trim()) == total) {
            ORDER.innerHTML += "<p> Wow! You have just enough money!</p>"
        }
        ORDER.innerHTML += "<h3>Your Receipt</h3>"
        ORDER.innerHTML += "<p>Name: " + NAME_FIELD.value.trim() + "</p>"
        ORDER.innerHTML += "<p>Order: </p><br>"
        for (let i = 0; i < shoppingList.length; i++) {
            ORDER.innerHTML += (i + 1) + ". " + shoppingList[i] + "<br>";
        }
        ORDER.innerHTML += "<p>Total cost: " + total + "</p>";
        ORDER.innerHTML += "<p>Your balance: " + BALANCE_FIELD.value.trim() + "</p>";
        ORDER.innerHTML += "<p>Change: " + (Number(BALANCE_FIELD.value.trim()) - total) + "</p>";
        ORDER.innerHTML += "<h4>THANK YOU</h4>";
    } 
}

function clearAll() {
    ORDER.innerHTML = "<p>All cleared, you can add whatever you want</p>";
}