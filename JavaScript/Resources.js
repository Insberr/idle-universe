// Wood
function gatherWood() {
    var wood = number(localStorage.getItem("IncrementalWood")) + 1;
    localStorage.setItem("IncrementalWood", number(wood));
    document.getElementById('woodamount').innerHTML = wood;
}

// Stone