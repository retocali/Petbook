
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		if (State.isSignedIn()) {
			document.getElementById("signupmessage").style.display = "inline"
			document.getElementById("form").style.display = "none";
		}
		document.getElementById("reset").addEventListener(
			"click", () => {
				document.getElementById("form").reset();		
			}
		);		
		document.getElementById("form").onsubmit = ()=>{submit()};
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

function submit() {
	State.signIn();
	console.log(State.isSignedIn());
	if (State.isSignedIn()) {
		document.getElementById("signupmessage").style.display = "inline";
	}
}

