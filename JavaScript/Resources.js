// Wood

var maxwood = 50;

function gatherWood() {
    //var life = food + 1;
    //var food = life;
    //localStorage.setItem("IncrementalWood", number(wood));
    //document.getElementById('woodamount').value = ++wood;
    if(wood < maxwood) {
        wood++;       
        document.getElementById('woodamount').innerHTML = wood + "/" + maxwood;
    } else {
        document.getElementById('woodamount').innerHTML = "maxed! " + wood + "/" + maxwood;
    }
}


// Stone

function gatherStone() {
    stone++;       
    document.getElementById('stoneamount').innerHTML=stone;
}