var splashScreen = new Vue({
	el: '#splashScreen',
	data: {},
	watch: {
		remove() {
			return;
		}
	}
})

var navigation = new Vue({
	el: '#navigation',
	data: {
		tabs: {}
	},
	created() {
		this.tabs = Game.load.tabs();
	},
	methods: {
		update(i) {
			this.tabs = i;
		}
	}
})