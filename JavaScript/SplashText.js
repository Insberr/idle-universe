//I will add the text from the google doc later, once i figure out JavaScript a bit more

var splashTextArray = ["Venturing Into The Unknown...",
"Installing Virus...",
"Deleting Windows...",
"Transferring Data to NASA...",
"Activating Ludicrous Speed...",
"Introducing Turtles...", 
"Converting Mass Back to Energy...", 
"Just One More Piece!", 
"Absolutely no memes!",
"Also try Kittens!",
"Also try Dark Room!",
"Also try Factorio!",
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
"[Citation Needed]",
"Terms and Conditions apply",
"What's this game called again?",
"Minors welcome!",
"pls rt",
"Pretty!",
"The cake is a lie",
"Read more books!",
"Friday Facts!",
"Singleplayer!",
"Something's not quite right...",
"sqrt(-1) love you!",
"Stop being reasonable, this is the Internet!",
"I promise! It's not a scam!",
"Not copy-pasted!",
"Incremental Universe will still be there in the morning! Get some sleep!",
"Take frequent breaks!",
"Works in theory!",
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
"Try it!",
"Net Neutrality!",
"Water proof!",
"Hallo Deutschland!",
"Does not affect hay fever!",
"JavaScript!",
"Recruiting Robot Hamsters...",
"Autoclickers strictly discouraged!",
];
var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

var currentDate = (new Date()).toString();
if(currentDate.indexOf("Jan 01") !== -1){
	splashText = "Happy New Year!";
}
if(currentDate.indexOf("Feb 14") !== -1){
	splashText = "Happy Valentines!";
}
if(currentDate.indexOf("Nov 15") !== -1){
	splashText = "Happy 1'st B-Day Incremental Universe!";
}
if(currentDate.indexOf("Dec 25") !== -1){
	splashText = "Merry Christmas!";
}
document.getElementById("splashText").textContent = splashText;
