var button;
var num_buttons = 4;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
        
        for (let i = 1; i <= num_buttons; i++) {
            Util.one("#btn"+i).addEventListener('click', function(e) {
                button = "btn"+i;
                buttonPress()
            });              
            let result = sessionStorage.getItem("emailed-btn"+i);
            console.log(result);
            if (result) {
                Util.one("#btn"+i).innerHTML = "Cancel Contact";
            }
        }

        Util.one("#yesbtn").addEventListener('click', function(e) {
            let buttonObj = document.getElementById(button);
            
            if(buttonObj.innerHTML == "Email User"){
                buttonObj.innerHTML = "Cancel Contact";
                sessionStorage.setItem("emailed-"+button, true);
            }
            else{
                buttonObj.innerHTML = "Email User";
                sessionStorage.setItem("emailed-"+button, false);
            }
            document.getElementById("hovermenu").setAttribute("style", "display:none")
		});

        Util.one("#nobtn").addEventListener('click', function(e) {
			document.getElementById("hovermenu").setAttribute("style", "display:none")
		});
	},
    
});


function buttonPress(){
    let buttonObj = document.getElementById(button);
    if(button.innerHTML == "Email User"){
        document.getElementById("warning").innerHTML = "Send an email asking for a grooming service from this user?"
    }
    else{
        document.getElementById("warning").innerHTML = "Cancel grooming service from this user?"
    }
    document.getElementById("hovermenu").setAttribute("style", "display:flex")
}









