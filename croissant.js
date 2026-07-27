/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("croissantScript");
const NAME_FIELD = document.getElementById("nameField");
const BALANCE_FORM = document.getElementById("balanceForm");
const BALANCE_FIELD = document.getElementById("balanceField");
const ORDER = document.getElementById("order");
let shoppingList = [];
let userName;
let userBalance;
const CROISSANT_LIST = ["chocolate", "almond", "plain", "cheese", "ham"];
const CROISSANT_PRICE = ["6.79", "7.19", "5.79", "6.79", "6.99"];

let total = 0;

/************************
 Main Code
************************/
OUTPUT.innerHTML += "<img src='Images/croissant/choc.jpg' id='croissant1' class='halfWidth' alt='chocolate'>";
OUTPUT.innerHTML += "<img src='Images/croissant/almond.jpg' id='croissant2' class='halfWidth' alt='almond'>";
OUTPUT.innerHTML += "<img src='Images/croissant/plain.webp' id='croissant3' class='halfWidth' alt='plain'>";
OUTPUT.innerHTML += "<img src='Images/croissant/cheese.webp' id='coffee4' class='halfWidth' alt='cheese'>";
OUTPUT.innerHTML += "<img src='Images/croissant/ham&cheese.jpg' id='coffee5' class='halfWidth' alt='ham&cheese'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Chocolate - Parisian Midnight</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Almond - Almond Whisper</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Plain - Golden Layers</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Cheese - Cream & Crust</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Ham & Cheese - Morning Savour</h3>";
OUTPUT.innerHTML += "<p class='description'>Filled with smooth melted chocolate inside perfectly laminated buttery pastry.</p>";
OUTPUT.innerHTML += "<p class='description'>Filled with sweet almond cream and topped with toasted sliced almonds for extra crunch.</p>";
OUTPUT.innerHTML += "<p class='description'>Buttery, flaky layers baked to golden perfection with a crisp, delicate finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Flaky pastry wrapped around rich, creamy cheese and baked until beautifully golden.</p>";
OUTPUT.innerHTML += "<p class='description'>Tender smoked ham nestled in buttery pastry for a warm and satisfying savoury bite.</p>"
price(CROISSANT_PRICE[0]);
price(CROISSANT_PRICE[1]);
price(CROISSANT_PRICE[2]);
price(CROISSANT_PRICE[3]);
price(CROISSANT_PRICE[4]);

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