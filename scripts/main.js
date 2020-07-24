
// Resources
var wood = 0, maxwood = 50, woodonload = wood + "/" + maxwood;
var stone = 0, maxstone = 50, stoneonload = stone + "/" + maxstone, lockstone = true;




var splashTextArray = [" ",
" ",
" ",
" ",
" ",
" ", 
" ", 
" ", 
" ",
" ",
" ",
" ",
"As seen online!",
"Casual gaming!",
"Open Source!",
"Child's play!",
"Who's the Overlord?",
"Do it all, everything!",
"Doesn't avoid double negatives!",
"Doesn't use the Z-word!",
"Don't bother with the clones!",
"Don't look directly at the bugs!",
"Does not include fidget spinners.",
"Dyson Spheres: Better than fidget spinners!",
"Reversing entropy by making contracts...",
"Data is king!",
"Do you have any grapes?",
" ",
"Terms and Conditions apply",
"What's this game called again?",
"Minors welcome!",
" ",
" ",
"The cake is a lie",
"Read more books!",
"Friday Facts!",
" ",
"Something's not quite right...",
"sqrt(-1) love you!",
"Stop being reasonable, this is the Internet!",
"I promise! It's not a scam!",
"Not copy-pasted!",
"Incremental Universe will still be there in the morning! Get some sleep!",
"Take frequent breaks!",
" ",
"Tell your friends!",
"The Overlord is a spy!",
"The sky isn't the limit!",
"The true meaning of covfefe",
"This isn't even my final form!",
"This message will never appear on the splash screen - isn't that weird?",
"Introducing Turtles...",
"Tens of colours!",
"Throw yourself at the ground and miss",
"Tip your waiter!",
" ",
"Net Neutrality!",
"Water proof!",
"Hallo Deutschland!",
"Does not affect hay fever!",
"JavaScript!",
"Recruiting Robot Hamsters...",
" ",
];
var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

var currentDate = (new Date()).toString();
if(currentDate.indexOf("Jan 01") !== -1){
	splashText = "Happy New Year!";
}
if(currentDate.indexOf("Feb 14") !== -1){
	splashText = "un-Happy Valentines!";
}
if(currentDate.indexOf("Nov 15") !== -1){
	splashText = "Happy 1'st B-Day Incremental Universe!";
}
if(currentDate.indexOf("Dec 25") !== -1){
	splashText = "Merry Christmas!";
}
document.getElementById("splashText").textContent = splashText;





function onLoad() {
    document.getElementById("woodamount").innerHTML = woodonload;
    document.getElementById('stoneamount').innerHTML = stoneonload;
    document.getElementById('stone').style.display = "none";
}

onLoad();

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
        document.getElementById('stone').style.display = "inline";
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