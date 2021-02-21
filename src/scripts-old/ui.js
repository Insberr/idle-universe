var splashScreen = new Vue({
	el: '#splashScreen',
	data: function() {
return {};
},
	watch: {
		remove() {
			return;
		}
	}
})

var navigation = new Vue({
	el: '#navigation',
	data: function() {
return {
		tabs: {}
	};
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