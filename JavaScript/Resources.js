// Wood

var food = 1;

function gatherWood() {
    var life = food + 1;
    var food = life;
   // localStorage.setItem("IncrementalWood", number(wood));
    document.getElementById('woodamount').value = food;
}

// Stone

var i = 0;

function gatherStone() {
    document.getElementById('stoneamount').value = ++i;
}