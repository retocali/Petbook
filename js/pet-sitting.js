var button;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {

        Util.one("#btn1").addEventListener('click', function(e) {
            button = document.getElementById("btn1")
            buttonPress()
		});

        Util.one("#btn2").addEventListener('click', function(e) {
            button = document.getElementById("btn2")
            buttonPress()
		});

        Util.one("#btn3").addEventListener('click', function(e) {
            button = document.getElementById("btn3")
            buttonPress()
		});

        Util.one("#btn4").addEventListener('click', function(e) {
            button = document.getElementById("btn4")
            buttonPress()
		});



        Util.one("#yesbtn").addEventListener('click', function(e) {
			if(button.innerHTML == "Email User"){
                button.innerHTML = "Cancel Contact"
            }
            else{
                button.innerHTML = "Email User"
            }
            document.getElementById("hovermenu").setAttribute("style", "display:none")
		});

        Util.one("#nobtn").addEventListener('click', function(e) {
			document.getElementById("hovermenu").setAttribute("style", "display:none")
		});
	},
    
});


function buttonPress(){
    if(button.innerHTML == "Email User"){
        document.getElementById("warning").innerHTML = "Send an email asking for this user to pet-sit your animal(s)?"
    }
    else{
        document.getElementById("warning").innerHTML = "Cancel pet-sitting service from this user?"
    }
    document.getElementById("hovermenu").setAttribute("style", "display:flex")
}









