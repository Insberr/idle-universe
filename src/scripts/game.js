let defaultData = {
	game: {
		level: 1,
		gain: 1
	},
	resources: {
		dirt: { id: 'dirt', amount: 0 },
		sand: { id: 'sand', amount: 0 }
	},
	tabs: {
		research: { id: 'research', unlocked: false }
	},
	achievements: [],
	settings: {
		theme: 'dark'
	}
};

var Game = (function () {
	let instance = {
		saveData: defaultData,
		ui: {},
		lastUpdateTime: 0,
		intervals: {},
		uiComponents: [],
		logoAnimating: true,
		timeSinceAutoSave: 0,
		activeNotifications: {},
		lastFixedUpdate: new Date().getTime()
	};

	instance.save = function (data) {
		return; // localStorage.setItem('save', JSON.stringify(data));
	};

	instance.load = {
		resources() {
			return instance.saveData.resources;
		},
		tabs() {
			return instance.saveData.tabs;
		}
	};

	instance.start = function () {
		document.getElementById("woodamount").innerHTML = woodonload;
		document.getElementById('stoneamount').innerHTML = stoneonload;
		document.getElementById('stone').style.display = "none";
		console.log('started');
		return;
	};

	return instance;
}());

window.onLoad = function () {
	Game.start();
};