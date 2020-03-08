// Wood
function gatherWood() {
    var wood = localStorage.getItem("IncrementalWood") + 1;
    localStorage.setItem("IncrementalWood", wood);
    document.getElementById('woodamount').innerHTML = wood;
}

// Stone