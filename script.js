/************************
Header 
************************/
console.log("Hello world!")


/************************
Variables 
************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
let shoppingList = [];

/************************
 Main Code
************************/
OUTPUT.innerHTML = "This is the output from JavaScript!";


/*************************
Functions 
************************/ 
function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
}

function addShopping(){
    const SHOP_FIELD = document.getElementById("shopField");
    OUTPUT.innerHTML +=  "<br>You have added <b>[ " +SHOP_FIELD.value+" ]</b> to the list";
    shoppingList.push(SHOP_FIELD.value);
    OUTPUT.innerHTML += "<br>There are <b>" + shoppingList.length + "</b> items in your shopping list.<br>" ;
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += (i+1) + ". " + shoppingList[i] + "<br>";
    } 
    OUTPUT.innerHTML += "<br>";
}