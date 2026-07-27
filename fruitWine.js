/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("wineScript");
const NAME_FIELD = document.getElementById("nameField");
const BALANCE_FORM = document.getElementById("balanceForm");
const BALANCE_FIELD = document.getElementById("balanceField");
const ORDER = document.getElementById("order");
let shoppingList = [];
let userName;
let userBalance;
const FRUIT_WINE_LIST = ["apple", "grape", "passionfruit", "fig", "grapefruit"];
const FRUIT_WINE_PRICE = ["11.59", "11.99", "11.79", "13.49", "11.49"];

let total = 0;

/************************
 Main Code
************************/
OUTPUT.innerHTML += "<img src='Images/wine/apple.png' id='wine1' class='halfWidth' alt='apple'>";
OUTPUT.innerHTML += "<img src='Images/wine/grape.jpe' id='wine2' class='halfWidth' alt='grape'>";
OUTPUT.innerHTML += "<img src='Images/wine/passionfruit.jpeg' id='wine3' class='halfWidth' alt='passionfruit'>";
OUTPUT.innerHTML += "<img src='Images/wine/fig.png' id='wine4' class='halfWidth' alt='fig'>";
OUTPUT.innerHTML += "<img src='Images/wine/grapefruit.jpeg' id='wine5' class='halfWidth' alt='grapefruit'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Apple - Golden Orchard</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Grape - Velvet Vine</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Passionfruit - Sunlit Passion</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Fig - Fig & Ember</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Grapefruit - Citrus Bloom</h3>";
OUTPUT.innerHTML += "<p class='description'>Crafted from crisp apples, offering delicate sweetness and a refreshing finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Classic grape wine with rich fruit aromas and a beautifully balanced character.</p>";
OUTPUT.innerHTML += "<p class='description'>Bright tropical passionfruit flavours with lively acidity and a refreshing finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Smooth fig wine with mellow sweetness, subtle earthy notes, and remarkable depth.</p>";
OUTPUT.innerHTML += "<p class='description'>Refreshing grapefruit wine with vibrant citrus aromas and a pleasantly crisp finish.</p>";
price(WINE_PRICE[0]);
price(WINE_PRICE[1]);
price(WINE_PRICE[2]);
price(WINE_PRICE[3]);
price(WINE_PRICE[4]);

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