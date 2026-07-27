/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("muffinScript");
const NAME_FIELD = document.getElementById("nameField");
const BALANCE_FORM = document.getElementById("balanceForm");
const BALANCE_FIELD = document.getElementById("balanceField");
const ORDER = document.getElementById("order");
let shoppingList = [];
let userName;
let userBalance;
const MUFFIN_LIST = ["plain", "chocolate", "blueberry", "banana", "cinnamon"];
const MUFFIN_PRICE = ["5.49", "6.19", "6.49", "5.89", "5.79"];

let total = 0;

/************************
 Main Code
************************/
OUTPUT.innerHTML += "<img src='Images/muffin/plain.jpeg' id='muffin1' class='halfWidth' alt='plain'>";
OUTPUT.innerHTML += "<img src='Images/muffin/choc.jpg' id='muffin2' class='halfWidth' alt='chocolate'>";
OUTPUT.innerHTML += "<img src='Images/muffin/blueberry.jpg' id='muffin3' class='halfWidth' alt='blueberry'>";
OUTPUT.innerHTML += "<img src='Images/muffin/banana.jpg' id='coffee4' class='halfWidth' alt='banna'>";
OUTPUT.innerHTML += "<img src='Images/muffin/cinnamon.jpeg' id='coffee5' class='halfWidth' alt='cinnamon'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Plain - Morning Glow</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Chocolate - Midnight Cocoa</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Blueberry - Blue Meadow</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Banana - Autumn Spice</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Cinnamon - Morning Savour</h3>";
OUTPUT.innerHTML += "<p class='description'>Freshly baked with creamy butter and a soft, fluffy crumb. A timeless classic for every moment.</p>";
OUTPUT.innerHTML += "<p class='description'>Rich cocoa and melted chocolate folded into a moist muffin for an indulgent treat.</p>";
OUTPUT.innerHTML += "<p class='description'>Bursting with juicy blueberries, bringing a sweet and refreshing flavour in every bite.</p>";
OUTPUT.innerHTML += "<p class='description'>Made with ripe bananas for a naturally sweet taste and a wonderfully tender texture.</p>";
OUTPUT.innerHTML += "<p class='description'>Infused with warm cinnamon spice and baked until golden for a comforting homemade favourite.</p>"
price(MUFFIN_PRICE[0]);
price(MUFFIN_PRICE[1]);
price(MUFFIN_PRICE[2]);
price(MUFFIN_PRICE[3]);
price(MUFFIN_PRICE[4]);

/*************************
Functions 
************************/
function nameInput() {
    const WELCOME_FORM = document.getElementById("welcomeForm");
    const NAME_FIELD = document.getElementById("nameField");
    userName = NAME_FIELD.value.trim();
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
    userBalance = Number(BALANCE_FIELD.value);
    if (BALANCE_FIELD.value.trim() === "") {
        return;
    } else {
        BALANCE_FORM.innerHTML = "Your balance:<b>$" + BALANCE_FIELD.value.trim() + "</b>!";
        return;
    }
}

function price(_price) {
    OUTPUT.innerHTML += "<p class='price'>Price: $" + _price + "</p>";
}

function addOrder(_item, _uPrice, _qty) {
    const QTY = document.getElementById(_qty);

    if (QTY.value == 0) {
        return;
    } else {
        ORDER.innerHTML += "<br>You have added <b>[" + QTY.value + "]</b> <b>[ " + _item + " ]</b><br>";
        shoppingList.push(_item + " ✖︎ " + QTY.value);

        ORDER.innerHTML += "<br>";
        let newPrice = ((Number(_uPrice) * 1000) * (Number(QTY.value)) * 1000) / 1000000;
        total = (total * 1000 + newPrice * 1000) / 1000
        ORDER.innerHTML += "Current price: " + total;
    }
}

function receipt() {
    if (shoppingList.length == 0) {
        ORDER.innerHTML = "<p>Nothing ಠ_ಠ</p>";
        return;
    }
    if (Number(userBalance) < total) {
        ORDER.innerHTML += "<p>Not enough balance (╯﹏╰）</p>"
        return;
    } else if (Number(userBalance) >= total) {
        ORDER.innerHTML = "<h3>Your Receipt</h3>"
        ORDER.innerHTML += "<p>Name: " + userName + "</p>"
        ORDER.innerHTML += "<p>Order: </p>"
        for (let i = 0; i < shoppingList.length; i++) {
            ORDER.innerHTML += (i + 1) + ". " + shoppingList[i] + "<br>";
        }
        ORDER.innerHTML += "<p>Total cost: " + total + "</p>";
        ORDER.innerHTML += "<p>Your balance: " + userBalance + "</p>";
        ORDER.innerHTML += "<p>Change: " + ((Number(userBalance) * 1000 - total * 1000) / 1000) + "</p>";
        if (Number(userBalance) * 1000 == total * 1000) {
            ORDER.innerHTML += "<p> Wow! You have just enough money!</p>"
            ORDER.innerHTML += "<h4>THANK YOU</h4>";
        } else {
            ORDER.innerHTML += "<h4>THANK YOU</h4>";
        }
    } 
}

function clearAll() {
    shoppingList = [];
    total = 0;
    ORDER.innerHTML = "<p>All cleared</p>";
}