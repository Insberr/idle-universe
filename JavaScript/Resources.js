// Wood

function gatherWood() {
    //var life = food + 1;
    //var food = life;
    //localStorage.setItem("IncrementalWood", number(wood));
    //document.getElementById('woodamount').value = ++wood;
    if(wood < maxwood) {
        wood++;       
        document.getElementById('woodamount').innerHTML = wood + "/" + maxwood;
    } else {
        document.getElementById('woodamount').innerHTML = "No More Space " + wood + "/" + maxwood;
        //then unlock stone
    }
}


// Stone

function gatherStone() {
    if (stone < maxstone) {
        stone++;
        document.getElementById('stoneamount').innerHTML = stone + "/" + maxstone;
    } else {
        document.getElementById('stoneamount').innerHTML = "No More Space! " + stone + "/" + maxstone;
        //unlock next item
    }
}