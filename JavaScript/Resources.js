// Wood

//var food = 1;

function gatherWood() {
    //var life = food + 1;
    //var food = life;
    //localStorage.setItem("IncrementalWood", number(wood));
    //document.getElementById('woodamount').value = ++wood;
    wood++;       
    document.getElementById('woodamount').innerHTML=wood;
}

// Stone

function gatherStone() {
    stone++;       
    document.getElementById('stoneamount').innerHTML=stone;
}