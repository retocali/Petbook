

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		console.log('hello??');
		var data = new Data();
		console.log(data.cats);
		console.log(data.allData);
	},

	// Keyboard events arrive here
	"keydown": function(evt) {

    },

    // Click events arrive here
	"click": function(evt) {

    },
	"mousedown": function(evt) {

    },
	"mousemove": function(evt) {

    },
	"mouseup": function(evt) {

    }
});

