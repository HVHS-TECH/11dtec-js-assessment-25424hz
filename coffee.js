/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("coffeeScript");
const NAME_FIELD = document.getElementById("nameField");
const BALANCE_FORM = document.getElementById("balanceForm");
const BALANCE_FIELD = document.getElementById("balanceField");
const ORDER = document.getElementById("order");
let shoppingList = [];
let userName;
let userBalance;
const COFFEE_LIST = ["latte", "cappuccino", "americano", "espresso"];
const COFFEE_PRICE = ["7.19", "6.99", "5.99", "4.29"];


let total = 0;

/************************
 Main Code
************************/
OUTPUT.innerHTML += "<img src='Images/coffee/latte.jpeg' id='coffee1' class='halfWidth' alt='latte'>";
OUTPUT.innerHTML += "<img src='Images/coffee/cappuccino.jpeg' id='coffee2' class='halfWidth' alt='cappucino'>";
OUTPUT.innerHTML += "<img src='Images/coffee/americano.jpeg' id='coffee3' class='halfWidth' alt='americano'>";
OUTPUT.innerHTML += "<img src='Images/coffee/espresso.webp' id='coffee4' class='halfWidth' alt='espresso'>";
OUTPUT.innerHTML += "<h3 class='foodName'>Latte - Morning Mist</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Cappucino - Velvet Dawn</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Americano - Amber Horizon</h3>";
OUTPUT.innerHTML += "<h3 class='foodName'>Espresso - Midnight Shot</h3>";
OUTPUT.innerHTML += "<p class='description'>Smooth espresso blended with silky steamed milk, creating a rich, creamy coffee with a velvety finish.</p>";
OUTPUT.innerHTML += "<p class='description'>Bold espresso paired with steamed milk and a thick layer of velvety foam.</p>";
OUTPUT.innerHTML += "<p class='description'>Fresh espresso gently blended with hot water for a smooth, full-bodied coffee experience.</p>";
OUTPUT.innerHTML += "<p class='description'>A concentrated shot of premium espresso with a bold aroma and a lingering finish.</p>";
price(COFFEE_PRICE[0]);
price(COFFEE_PRICE[1]);
price(COFFEE_PRICE[2]);
price(COFFEE_PRICE[3]);

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