
Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		if (State.isSignedIn()) {
		}
		document.getElementById("addPet").addEventListener(
			"click", () => {
				document.getElementById("hovermenu").style.display = "inline"
			}
        );
        document.getElementById("cancel").addEventListener(
			"click", () => {
				document.getElementById("hovermenu").style.display = "none"
			}
        );
        document.getElementById("signup").addEventListener(
			"click", () => {
				document.getElementById("hovermenu").style.display = "inline"
			}
		);		
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

