
function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("QTY").value;
    return parseInt(selectedQuantity);
}
function gettotalSuperLargeAmount() {
    var totalSuperLargeAmount = 2300 + getCrust() + getToppings() * getQuantity();
    alert(" The Total Amount is kshs." +(totalSuperLargeAmount));
    prompt("enter your location")
    alert("You order will be delivered shortly")
}

function gettotalLargeAmount() {
    var totalLargeAmount = 1800 + getCrust() + getToppings() * getQuantity();
    alert(" The Total Amount is kshs." +(totalLargeAmount));
    prompt("enter your location")
    alert("You order will be delivered shortly")
}

function gettotalMediumAmount() {
    var totalMediumAmount = 1500 + getCrust() + getToppings() * getQuantity();
    alert(" The Total Amount is kshs." +(totalMediumAmount));
    prompt("enter your location")
    alert("You order will be delivered shortly")
}

function gettotalSmallAmount() {
    var totalSmallAmount = 800 + getCrust() + getToppings() * getQuantity();
    alert(" The Total Amount is kshs." +(totalSmallAmount));
    prompt("enter your location")
    alert("You order will be delivered shortly")
}